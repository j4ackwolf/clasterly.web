
##########################################################################################################################################################################
# name the portage image
FROM gentoo/portage:latest as portage
LABEL maintainer.1="Simon Lapin <lapinsa42@gmail.com>"
LABEL maintainer.2="Stanislav M <masolkin@gmail.com>"

# based on stage3 image 
FROM gentoo/stage3:latest as build-env

# copy the entire portage volume in
COPY --from=portage /var/db/repos/gentoo /var/db/repos/gentoo

# Configure cpu env
ENV CGO_ENABLED=0
RUN NCPU=$(getconf _NPROCESSORS_ONLN) \
 && NCPU=${NCPU:-1} \
 && NCPU=$((NCPU * 12 / 10)) \
 && NJOBS=$(python -c "print('{:.1f}'.format($NCPU * 0.8))") \
 && echo cpu in sytem $NCPU \
 && sed -i \
  -e "/MAKEOPTS=/d" \
  -e "/EMERGE_DEFAULT_OPTS=/d" \
  -e "/CFLAGS=/i MAKEOPTS=\"-j $NCPU \"" \
  -e "/CFLAGS=/i EMERGE_DEFAULT_OPTS=\"-j $NCPU --load-average=$NJOBS\"" \
      /etc/portage/make.conf

# continue with image build ...
RUN emerge nodejs
#RUN emerge -uDN dev-libs/protobuf


#RUN go get github.com/go-delve/delve/cmd/dlv

#ADD . /build
#WORKDIR /build

#RUN make
#RUN cd app && go build -mod vendor -o /clasterly

# FROM scratch
# EXPOSE 8000
# #COPY --from=maindev /root/go/bin/dlv /
# COPY --from=build-env /clasterly /
# #CMD ["/dlv", "--listen=:40000", "--headless=true", "--api-version=2", "--accept-multiclient", "exec", "/clasterly"]

#ENTRYPOINT ["/clasterly"]