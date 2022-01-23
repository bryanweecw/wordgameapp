# Python program to convert text
# file to JSON


import json


# the file to be converted to
# json format
filename = "wordgameapp/en.txt"

# dictionary where the lines from
# text will be stored
dict1 = []

# creating dictionary
with open(filename) as fh:

    for line in fh:
        if len(line.strip()) == 5:
            dict1.append(line.strip())

# creating json file
# the JSON file is named as test1
out_file = open("test1.json", "w")
json.dump(dict1, out_file, indent=4, sort_keys=False)
out_file.close()
