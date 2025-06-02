import React from 'react'
import { gql, useQuery } from '@apollo/client'

import client from '../../utils/ApolloClient'
import '../../assets/css/ServiceCard.css'
import { ServicePlaceholder } from '../../assets/css/skelton/Service'
import { motion } from 'framer-motion'

const GET_ITEMS = gql(`
  query IMAGES {
  services {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
}`)

export const ServicesCard = () => {
  const { loading, error, data } = useQuery(GET_ITEMS, { client })

  if (loading)
    return (
      <p>
        <ServicePlaceholder />{' '}
      </p>
    )
  if (error) return <p>Error: {error.message}</p>
  return (
    <div className='row mt-5 my-3 '>
      {data.services.nodes.map((item, index) => (
        <div className='col-xl-3 col-md-6 my-2'>
          <motion.div
            className='card shadow-sm d-flex h-100'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
          >
            <center>
              <img
                src={item.featuredImage.node.mediaItemUrl}
                alt={item.title}
                className='my-3 rounded-circle'
                style={{ width: 150, height: 150 }}
              />
            </center>
            <div className='card-body text-center m-2'>
              <p className='fw-bold' style={{ fontSize: '18px' }}>
                {item.title}
              </p>
              <p
                style={{ fontSize: '12px' }}
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
