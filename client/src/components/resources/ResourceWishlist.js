import React, { useState } from 'react'
import axios from 'axios'

const ResourceWishlist = ({ userData, resource }) => {
  console.log('USER', userData)
  if (!userData) return ''  

  const [wishlist] =  useState({
    wishList: [...userData.wishlist, resource.id],
  })


  if (!wishlist) return ''

  console.log('WISHLIST', wishlist)

  const handleWishlist = async () =>{
    await axios.put(
      `/api/auth/profile/${userData.id}/`,
      wishlist
    )
  }

  return (
    <div>
      <button className="ui basic blue button" onClick={ handleWishlist} value="Added to your wishlist!">Save for later</button>
    </div>
  )
}

export default ResourceWishlist