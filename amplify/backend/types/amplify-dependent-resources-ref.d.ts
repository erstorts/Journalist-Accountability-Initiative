export type AmplifyDependentResourcesAttributes = {
    "function": {
        "jai": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "jaiUsers": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "jai": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}