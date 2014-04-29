tebora.com/user/123
```
{
  "name": "Marie Andrews",
  "phone": "123",
  "id": "234",
  "channels": [
    {
      "id": "123",
      "details": {
        "status": "NEW",
        "type": "critical",
        "description": "fever of 105F",
        "timestamp": "1 minute ago"
      },
      "patient": {
        "name": "Bob Smith",
        "mrn": "MRN 88447634",
        "bed": "Bed 402",
        "id": "123"
      }
    },
    {
      "id": "345",
      "details": {
        "status": "NEW",
        "type": "critical",
        "description": "fever of 105F",
        "timestamp": "1 minute ago"
      },
      "patient": {
        "name": "Bob Smith",
        "mrn": "MRN 88447634",
        "bed": "Bed 402",
        "id": "123"
      }
    }
  ]
}
```

tebora.com/channel/345
```
{
  "details": {
    "status": "NEW",
    "type": "critical",
    "description": "fever of 105F",
    "timestamp": "1 minute ago"
  },
  "patient": {
    "name": "Bob Smith",
    "mrn": "MRN 88447634",
    "bed": "Bed 402",
    "id": "123"
  },
  "creator": {
    "name": "Foo",
    "phone": "123",
    "id": "234"
  },
  "participants": [
    {
      "name": "Foo",
      "phone": "123",
      "id": "234"
    },
    {
      "name": "Foo",
      "phone": "123",
      "id": "234"
    }
  ],
  "messages": [
    {
      "sender": {
        "name": "Foo",
        "phone": "123",
        "id": "234"
      },
      "message": "Bob's fever has been going up in the last 22 minutes",
      "timestamp": "12344444"
    },
    {
      "sender": {
        "name": "Foo",
        "phone": "123",
        "id": "234"
      },
      "message": "Bob's fever has been going up in the last 22 minutes",
      "timestamp": "12344444"
    }
  ]
}
```