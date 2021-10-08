echo '\n \n requesting all heroes'
curl localhost:3000/heroes

echo '\n \n requesting flash'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid":"data"}' \
    localhost:3000/heroes



echo '\n\n creating chapolin'
CREATE=$(curl --silent -X POST \
    --data-binary '{"name":"John","age":"100","power":"Strength"}' \
    localhost:3000/heroes)

echo $CREATE

ID=$(echo $CREATE | jq ".id")

echo '\n \n requesting champolin'
echo "Temos erro nesta linha devido o jq .id"
curl localhost:3000/heroes/$ID