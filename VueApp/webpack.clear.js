const path = require('path');
const rm = require('rimraf');
 
 //生产环境 删除dist文件重新构建
 rm(path.join(__dirname, "dist"), err => {
    if (err) throw err
    //声音
    //process.stdout.write("\x07"); 
    console.log("删除dist成功");
});