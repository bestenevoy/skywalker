git fetch
git reset --hard origin/master
yarn build
pm2 restart next:skywalker

# pm2 start yarn --name "next:skywalker" --interpreter bash -- start
