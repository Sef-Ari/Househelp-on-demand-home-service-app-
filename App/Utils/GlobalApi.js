import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-eu-west-2.hygraph.com/v2/clrikec7u097601v2q9zmp6gp/master"

const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
`
const result= await request(MASTER_URL, query);
return result;
}


const getCategorise=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }    
`
      
const result= await request(MASTER_URL, query);
return result;
}

const getBusinessList=async()=>{
  const query=gql`
  query GetBusinessList {
    businessLists {
      id
      names
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
  const result= await request(MASTER_URL, query);
return result;
}
export default{
    getSlider,
    getCategorise,
    getBusinessList
}
// }
// import { request, gql } from 'graphql-request';

// const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clrikec7u097601v2q9zmp6gp/master";

// const getSlider = async () => {
//     const query = gql`
//         query GetSlider {
//             sliders {
//                 id
//                 name
//                 image {
//                     url
//                 }
//             }
//         }
//     `;

//     // Renamed the variable to 'response'
//     const request = await request(MASTER_URL, query);
//     return request;
// };

// export default {
//     getSlider
// };
