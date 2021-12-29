# 进入部署上线项目的文件夹
cd /www/ryder.pw/fuguiliu.github.io;
# 进行拉取操作
git pull --rebase origin master;
# 如必要还需让项目重启
# 我是采用pm2 restart some_id的方式