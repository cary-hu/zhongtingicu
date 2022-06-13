docker build . -t zhongtingicu

docker stop zhongtingicu-container
docker rm zhongtingicu-container
docker run -d --name zhongtingicu-container -p 8621:80 zhongtingicu
