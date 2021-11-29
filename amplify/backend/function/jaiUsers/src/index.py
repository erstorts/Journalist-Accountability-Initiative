import json


def handler(event, context):
    print('received event:')
    print(event)
    body = json.loads(event['body'])

    email = body['email']
    #article = body['article']

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Post made for {}'.format(email))
    }
