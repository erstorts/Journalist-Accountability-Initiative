import json
import random


def handler(event, context):
    print('received event:')
    print(event)

    #body = json.loads(event['body'])
    #article = body['article']

    bias_options = ['Left', 'Lean Left', 'Center', 'Lean Right', 'Right']
    random_number = random.randint(0, len(bias_options)-1)
    bias = bias_options[random_number]

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps("This article has a {} bias.".format(bias))
    }
