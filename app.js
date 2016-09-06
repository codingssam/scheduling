var CronJob = require('cron').CronJob;
var moment = require('moment-timezone');

var timeZone = "Asia/Seoul";

var crontime_min50 = "00 50 9-17 * * 1-5";
var crontime_1215 = "00 15 12 * * 1-5";
var crontime_1755 = "00 55 17 * * 1-5";

var job_min50 = new CronJob(crontime_min50, function() {
  console.log(moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss") +
    " : 눈의 피로를 풀어 주세요...");
}, true, timeZone);

var job_1215 = new CronJob(crontime_1215, function() {
  console.log(moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss") +
    " : 밥 먹으러 갑시다...");
}, true, timeZone);

var job_1755 = new CronJob(crontime_1755, function() {
  console.log(moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss") +
    " : 카카오택시 콜...");
}, true, timeZone);