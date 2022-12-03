if [ -n $ENDPOINT ] ; then
  if [ -n $ACCESS_TOKEN ] ; then
    get-graphql-schema -h 'Authorization=Bearer '$ACCESS_TOKEN $ENDPOINT > ./dist/schema.graphql
  else
    get-graphql-schema $ENDPOINT > ./dist/schema.graphql
  fi
else
  cd /home/build
  npx serve -s
fi
exit 0