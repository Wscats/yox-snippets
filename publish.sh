# count=1
# cat package.json | while read line | sed '/name/g'
# do
# 	echo "Line $count: $line"
# 	count=$[ $count + 1 ]
# done
# echo "Finished processing the file"


# grep 'name' package.json

# nl ./test/index.txt | sed '2,5d'

# cat ./test/index.txt | sed '2,5d'

sed 's/2/4/' ./test/index.txt