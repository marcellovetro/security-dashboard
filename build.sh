BUILD_DIR=v1
RELATIVE_PATH=security-dashboard

cd dashboard
ng build
# Move the build and fix the path
mv dist ../$BUILD_DIR
cd ..
sed -i -e "s/<base href='\/'>/<base href='\/$RELATIVE_PATH\/$BUILD_DIR\/'>/g" $BUILD_DIR/index.html
