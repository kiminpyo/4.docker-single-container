docker build -f Dockerfile.dev ./

-- 볼륨추가
docker -it -d -p 3000:3000 rladlsvy2448/single -v /usr/src/app/node_modules -v ${pwd}:/usr/src/app