# Vuexy - Vuejs, React, HTML & Laravel Admin Dashboard Template

**Vuexy – Vuejs, React, HTML & Laravel Admin Dashboard Template** – is the most developer friendly & highly customizable Admin Dashboard Template based on Bootstrap 4, Bootstrap Vue & Reactstrap.


# clasterly.web
Cluster management Admin Dashboard


##### Build container
```
docker build --force-rm \
        --compress \
        -f Dockerfile \
        --progress auto \
        -t clasterly.web:0.0.1 .
```

```
docker build --force-rm \
    --compress \
    --progress auto \
    -f app.arm64.Dockerfile \
    -t clasterly.app.arm64:$(cat ./version) .
```



##### Save container
```
docker save clasterly:0.0.2 | lbzip2 > clasterly_0.0.2.tar.bz2
```


##### Run container
```
docker run -d \
    --name=clasterly.web \
    --restart=always \
    -p 8080:8080 \
    clasterly.web:0.0.1
```