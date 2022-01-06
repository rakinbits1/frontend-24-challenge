# Deploy commands:
Development Environment:
`
npm run dev
`

Production:
`
npm run build;
npm run start
`

# Mock Data 
File Location: `src/Data/staticData.ts`


# API Required:

Recent Experience -  
Type: GET Request. 
Sample Response
`
    [
        {
            title: string,
            shortDescription: string,
            numberOfUsers: string
        }
    ]
`

Popular Categories:
Type: GET Request. 
Sample Response

`
[
      {
        name: string,
        slug: string,
        imgSrc: string,
        darkcolor:string,
        lightcolor:string,
        subcategories: [
          {
            name: string,
            slug: string,
            imgSrc: string
          }
        ]
      },
]
`



Deployed URL: https://extension-wallet.vercel.app/
