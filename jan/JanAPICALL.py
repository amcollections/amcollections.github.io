import requests
import csv
import json

with open('Auckland.1.csv', 'rb') as myfile:
    for p in myfile: 
        url = "http://api.aucklandmuseum.com/search/collectionsonline/_search"
        payload = json.dumps(
            {
              "size":0, 
              "query": {
                    "multi_match": {
                        "query": p ,
                        "type": "most_fields",
                        "fields": [ "dc_place", "dc_description"],
                        "operator": "and"
                                }
                },
              "aggs": {
                  "Format": {
                  	"terms": { 
                  	"field": "department.raw",
                  	"size":50,
                   	"min_doc_count" : 0}
                }
              }
            } )
        headers = {
            'content-type': "application/json",
            }
        response = requests.request("POST", url, data=payload, headers=headers,)
        parsed_json = json.loads(response.content)
        for i in range(23):
            dept = parsed_json ["aggregations"]["Format"]["buckets"][i]
            final = p + str(dept)
            print final
            data = open("output1.csv", 'a')
            data.write(final)