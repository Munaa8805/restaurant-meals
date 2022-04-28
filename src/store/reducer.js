import { useState, useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  testimonial: [
    {
      id: 1,
      name: "Bertie Yates",
      description:
        "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
    },
    {
      id: 2,
      name: "Hester Hogan",
      description:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
    },
    {
      id: 3,
      name: "Larry Little",
      description:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
    {
      id: 4,
      name: "Sean Walsh",
      description:
        "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    }
  ]
};

export const testimonialReducer = (state = { initialState }, action) => {
  if (action.type === "LOADING_TESTIMONIAL") {
    return {
      ...state
    };
  }
  return state;
};
