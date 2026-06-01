var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("제발 클라우드 타입 회원가입 하시고 체크카드 등록해오세요.");
});

const users = [{name:"홍길동"}]

router.get('/users', function(req, res, next) {
  res.json(users);
});

module.exports = router;
