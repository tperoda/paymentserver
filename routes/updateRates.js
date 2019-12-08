const requireLogin = require("../middleware/requireLogin");
const compare = require("./utils");

module.exports = app => {
  app.post("/api/manage_rates", requireLogin, (req, res) => {
    if (req.body.type === "margin") {
      try {
        const marginArray = req.user.margin;
        marginArray.push({
          key: req.body.val,
          text: `${req.body.val}%`,
          value: req.body.val
        });

        marginArray.sort(compare);
  
        req.user.margin = [...marginArray];
        req.user.save();
  
        res.send(req.user);
      } catch(error) {
        console.log("Margin Post Error", error);
      }
    } else if (req.body.type === "markup") {
      try {
        const markup = parseFloat((req.body.val / 100) + 1).toFixed(3);

        const getMarginPercent = () => {
          const total = 100 * markup;
          const diff = total - 100;
          const marginNumber = ((diff / total) * 100).toFixed(1);
          return marginNumber.toString();
        };

        const marginPercent = getMarginPercent();

        const markupArray = req.user.markup;
        markupArray.push({
          key: req.body.val,
          text: `${req.body.val}% - (${marginPercent}% Margin)`,
          value: req.body.val,
          markup: markup,
          marginPercent: marginPercent
        });

        markupArray.sort(compare);
  
        req.user.markup = [...markupArray];
        req.user.save();
  
        res.send(req.user);
      } catch(error) {
        console.log("Margin Post Error", error);
      }
    }
    
  });

  app.delete("/api/manage_rates", requireLogin, (req, res) => {

    if (req.query.type === "margin") {
      try {
        const marginArray = req.user.margin;
        const newArray = marginArray.filter(item => item.key !== req.query.val);

        req.user.margin = [...newArray];
        req.user.save();

        return res.send(req.user);
      } catch(error) {
        console.log("Delete Margin Route Express Error", error);
      }
    } else if (req.query.type === "markup") {
      try {
        const markupArray = req.user.markup;
        const newArray = markupArray.filter(item => item.key !== req.query.val);

        req.user.markup = [...newArray];
        req.user.save();

        return res.send(req.user);
      } catch(error) {
        console.log("Delete Markup Express Route Error", error);
      }
    }
  });
};
