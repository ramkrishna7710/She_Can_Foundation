const router=
require("express")
.Router();

const {

submitForm

}=require(
"../controllers/formController"
);

router.post(
"/",
submitForm
);

module.exports=
router;