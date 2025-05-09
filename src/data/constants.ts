export const RESTAURANTS_LIST: Restaurants[] = [
    {
      id: 1,
      name: "Sunset Bistro",
      "image": "https://imgs.search.brave.com/f8emx5FXOReiwM3-qwT66pduWW7gi6oYPD7ETvUDrvo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAz/NDMyMzQ3MC9waG90/by9jdXN0b21lci1y/ZWNlaXZpbmctZm9v/ZC1hdC1idXJnZXIt/cmVzdGF1cmFudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eTJiMmVoWnFDdHg4/Z1Y2TU5vUk5HWGRD/emlhMTVsVVZ4V3E3/NG40Nm0xQT0",
      address: "100 Main Street, Cityville, ST 12340",
      phone: "(555) 000-1200",
      openHours: "10:00 AM - 10:00 PM",
      menu: {
        "Salads": {
          items: [
            {
              id: 1000,
              name: "Caesar Salad",
              price: "$3.07",
              rating: 4.4,
              image: "https://imgs.search.brave.com/HhJuKMf1TA9YJVOUlQJRN4C25qg5WU8lAThbYyKeo1E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTY1/MDk0MDg2L3Bob3Rv/L2ZyZXNoLXNhbGFk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1RbURxVnd6Y2I3/VDFRRmlYbzJWdVhD/QW9GOENyeDdiSjIw/S2Z2LWpLQm1FPQ"
            },
            {
              id: 1001,
              name: "Greek Salad",
              price: "$11.3",
              rating: 4.5,
              image: "https://imgs.search.brave.com/FXBfmHUhX-kFSvjws_x201pLN-NJ3BbT8mfTKfI12Ow/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzE4LzkwLzcw/LzM2MF9GXzExODkw/NzAzNV85eWUwM3RM/QWk2bk9iN2tPcTZI/OW9udmNkQWZrZmpM/ZS5qcGc"
            },
            {
              id: 1002,
              name: "Quinoa Bowl",
              price: "$8.92",
              rating: 4.9,
              image: "https://imgs.search.brave.com/Hzr_H-nMzplByOQ0mvSVOwL3CtoZrrvZxkNfjrgAxX8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFsZmJha2VkaGFy/dmVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDIv/U3BpY3ktU291dGh3/ZXN0LVF1aW5vYS1C/b3dsLTEuanBn"
            },
            {
              id: 1003,
              name: "Caprese Salad",
              price: "$11.89",
              rating: 3.6,
              image: "https://imgs.search.brave.com/vZCSKQtijtJbAHHUKxkGuXxTRcUbfLvtgEHk9u9ZpgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRlcnN0b2NrLmNv/bS9kdTAxOFhoZ3pf/NTFLMXExOGc5di0t/V18yVk5ISkdzellX/THNKRjdEWFdZL3Jl/c2l6ZTpmaXQ6MTIw/MC93YXRlcm1hcms6/MC4zOjo6OjAuNy9j/ek02THk5bGRHVnli/bWwwZVM5cGJXRm5a/WE12T1dNd01EUm1P/RGN0TW1VM09TMDBP/V1ptTFdKa01EUXRO/VFV4WVRaaVpEUmxZ/bVprTG1wd1p3Lndl/YnA"
            }
          ]
        },
        "Desserts": {
          "items": [
            {
              "id": 1004,
              "name": "Cheesecake",
              "price": "$4.55",
              "rating": 4.6,
              "image": "https://imgs.search.brave.com/6SsXN2GX2b3hfx0PEtgsbH4mUih92mKKeSWui6H9Z3g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAyLzk2LzA2/LzM2MF9GXzMwMjk2/MDYzOV9nWk5mRllK/c0F0SVp3ckR2eEc3/SjdpdGpDSmlpRTM2/ay5qcGc"
            },
            {
              "id": 1005,
              "name": "Brownie Sundae",
              "price": "$12.04",
              "rating": 4.4,
              "image": "https://imgs.search.brave.com/eJXdDEoIBNhLgClIGKQmiF7H3i7wjnD_M76qwCRIsUg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waWNr/eS1wYWxhdGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAxL0ljZS1DcmVh/bS1TdW5kYWUtQnJv/d25pZXMtMy03MDB4/NDY3LmpwZw"
            },
            {
              "id": 1006,
              "name": "Fruit Tart",
              "price": "$10.08",
              "rating": 5.0,
              "image": "https://imgs.search.brave.com/8rZgvjyp2-OC3hqeceP3nLHllYzx0yuFesUw0euMOqk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQ5LzY3LzI5/LzM2MF9GXzI0OTY3/Mjk2MV9LY1BPTTl4/eHFyYXdsamJidFox/SFlaQ3RSczlKOFBT/Si5qcGc"
            },
            {
              "id": 1007,
              "name": "Chocolate Mousse",
              "price": "$6.01",
              "rating": 4.6,
              "image": "https://imgs.search.brave.com/Wa46sZ3sr-4r9F3Z6wVfxnid7_h0Sjjgs-aAqLT6Duk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDE4LzA5L0No/b2NvbGF0ZS1Nb3Vz/c2VfOS5qcGc"
            }
          ]
        },
        "Drinks": {
          "items": [
            {
              "id": 1008,
              "name": "Lemonade",
              "price": "$6.95",
              "rating": 4.3,
              "image": "https://imgs.search.brave.com/CFV3-6zKXOGcyrn44eEfNz5o2aPhQbcwrvazHMTuQQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzUwLzAxLzM0/LzM2MF9GXzg1MDAx/MzQ5NF9zdDJ3YzJ3/aXNBdTAyRUdCV1BN/eWZXazFGak5waDU2/Qy5qcGc"
            },
            {
              "id": 1009,
              "name": "Iced Tea",
              "price": "$12.75",
              "rating": 4.3,
              "image": "https://imgs.search.brave.com/xKepxA7oyRZHU6jxxX1P-sJ1UcLzzGGw70JvD6Raz9Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/NTAxNzEwL3Bob3Rv/L2ljZWQtdGVhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1w/cTBNM20tRG4yY0pa/VHFLY0ZubmtRZVJX/elpnUFhpSlZiY3dB/NDA4U2lVPQ"
            },
            {
              "id": 1010,
              "name": "Cappuccino",
              "price": "$3.01",
              "rating": 4.8,
              "image": "https://imgs.search.brave.com/11HODDdPkbPBsHMI8juHvL-WzCCUH1N60XqGyDUK2Rw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcz/MjQ1ODg2L3Bob3Rv/L2NhcHB1Y2Npbm8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU02MjJmZW5OWDY1/T0dlbXRaUjBMRENx/NExWdnhOWkp5Z0k1/WTRENE5WOWc9"
            },
            {
              "id": 1011,
              "name": "Smoothie",
              "price": "$10.41",
              "rating": 3.6,
              "image": "https://imgs.search.brave.com/YsGlhzJvOHXPB93eN-KhYOSC-1HFdreEGL9GOrlbRUg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5Lzc0Lzk5LzM2/LzM2MF9GXzk3NDk5/MzY2OF96RXpIVzN3/RGZZUk8xS3RQQ2FK/UGJxeXZjREw1OHdi/Sy5qcGc"
            }
          ]
        },
        "Mains": {
          "items": [
            {
              "id": 1012,
              "name": "Grilled Chicken",
              "price": "$5.56",
              "rating": 4.5,
              "image": "https://imgs.search.brave.com/qPHikLvi5BObZY7j5t0ba944XDk_FlGMvJcR_1e_3Fg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E4L2Uw/L2M5L2E4ZTBjOWM1/MjdlNjEzYTkwNjUw/OTIwNzkxZDc1ZTA1/LmpwZw"
            },
            {
              "id": 1013,
              "name": "Pasta Alfredo",
              "price": "$3.01",
              "rating": 4.7,
              "image": "https://imgs.search.brave.com/HuVmAXfMHBTi7g5HzMU_nD_V9_W9B2pMKRGeu4WySM0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmluY2Vuem9zcGxh/dGUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzEwLzYx/MHgzNTAtUGhvdG8t/M184NTMtSG93LXRv/LU1ha2UtQUxGUkVE/Ty1QQVNUQS1MaWtl/LWFuLUl0YWxpYW4t/VjEuanBn"
            },
            {
              "id": 1014,
              "name": "Steak & Fries",
              "price": "$7.84",
              "rating": 3.9,
              "image": "https://imgs.search.brave.com/A93mnWwqWLz6Xnub6mWAM6AIwZkM4mOjO8YslclcvLY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vdXJi/ZXN0Yml0ZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDA4/LzA2L1NjcmVlbi1T/aG90LTIwMTktMDUt/MjItYXQtMTIuMTMu/NTktUE0tMi00MDB4/NDAwLmpwZw"
            },
            {
              "id": 1015,
              "name": "Veggie Burger",
              "price": "$14.79",
              "rating": 4.9,
              "image": "https://imgs.search.brave.com/E_hUTVaMLD5ro8cn0gTlnMGJ4wv_tZ8xlPvyAnvPSfI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/NTQzMDE5L3Bob3Rv/L3ZlZ2dpZS1idXJn/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtWdUN4TGdm/WTVsYjU5VEJpRW9a/b29qOVVoUk1TSnRv/VVhIOGR6a1A0Qnc9"
            }
          ]
        }
      }
    },
    {
      "id": 2,
      "name": "Urban Caf\u00e9",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      "address": "101 Park Avenue, Cityville, ST 12341",
      "phone": "(555) 000-1201",
      "openHours": "10:00 AM - 10:00 PM",
      "menu": {
        "Cakes": {
          "items": [
            {
              "id": 1016,
              "name": "Chocolate Cake",
              "price": "$14.57",
              "rating": 4.4,
              "image": "https://source.unsplash.com/featured/?chocolate%20cake"
            },
            {
              "id": 1017,
              "name": "Carrot Cake",
              "price": "$11.76",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?carrot%20cake"
            },
            {
              "id": 1018,
              "name": "Red Velvet",
              "price": "$7.13",
              "rating": 3.9,
              "image": "https://source.unsplash.com/featured/?red%20velvet"
            },
            {
              "id": 1019,
              "name": "Lemon Drizzle",
              "price": "$13.72",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?lemon%20drizzle"
            }
          ]
        },
        "Sandwiches": {
          "items": [
            {
              "id": 1020,
              "name": "Turkey Club",
              "price": "$9.52",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?turkey%20club"
            },
            {
              "id": 1021,
              "name": "BLT",
              "price": "$3.7",
              "rating": 4.4,
              "image": "https://source.unsplash.com/featured/?blt"
            },
            {
              "id": 1022,
              "name": "Caprese Sandwich",
              "price": "$12.44",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?caprese%20sandwich"
            },
            {
              "id": 1023,
              "name": "Chicken Panini",
              "price": "$4.96",
              "rating": 3.7,
              "image": "https://source.unsplash.com/featured/?chicken%20panini"
            }
          ]
        },
        "Drinks": {
          "items": [
            {
              "id": 1024,
              "name": "Lemonade",
              "price": "$6.12",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?lemonade"
            },
            {
              "id": 1025,
              "name": "Iced Tea",
              "price": "$12.29",
              "rating": 4.3,
              "image": "https://source.unsplash.com/featured/?iced%20tea"
            },
            {
              "id": 1026,
              "name": "Cappuccino",
              "price": "$11.36",
              "rating": 4.8,
              "image": "https://source.unsplash.com/featured/?cappuccino"
            },
            {
              "id": 1027,
              "name": "Smoothie",
              "price": "$4.72",
              "rating": 4.3,
              "image": "https://source.unsplash.com/featured/?smoothie"
            }
          ]
        },
        "Breakfast": {
          "items": [
            {
              "id": 1028,
              "name": "Avocado Toast",
              "price": "$11.69",
              "rating": 4.6,
              "image": "https://source.unsplash.com/featured/?avocado%20toast"
            },
            {
              "id": 1029,
              "name": "Pancakes",
              "price": "$4.08",
              "rating": 4.2,
              "image": "https://source.unsplash.com/featured/?pancakes"
            },
            {
              "id": 1030,
              "name": "Omelette",
              "price": "$11.26",
              "rating": 4.6,
              "image": "https://source.unsplash.com/featured/?omelette"
            },
            {
              "id": 1031,
              "name": "Breakfast Burrito",
              "price": "$8.01",
              "rating": 4.3,
              "image": "https://source.unsplash.com/featured/?breakfast%20burrito"
            }
          ]
        }
      }
    },
    {
      "id": 3,
      "name": "Golden Corral",
      "image": "https://imgs.search.brave.com/-DBDnNPsUB53kTGgif5RTVa7ntM9I8xX9BeSFaTQAbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1My/cjk1VjJ3b1FmRVRa/b2VacV9xYkEtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VGsyTUR0b1BUVXpP/US0tL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL21hc2hl/ZF82MDMvNGQwNTky/NmE1NDVjMjZmODc2/Mzk2OWY0MTg1YzFj/Nzk",
      "address": "102 Garden Road, Cityville, ST 12342",
      "phone": "(555) 000-1202",
      "openHours": "10:00 AM - 10:00 PM",
      "menu": {
        "Starters": {
          "items": [
            {
              "id": 1032,
              "name": "Bruschetta",
              "price": "$14.37",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?bruschetta"
            },
            {
              "id": 1033,
              "name": "Stuffed Mushrooms",
              "price": "$8.05",
              "rating": 4.6,
              "image": "https://source.unsplash.com/featured/?stuffed%20mushrooms"
            },
            {
              "id": 1034,
              "name": "Garlic Bread",
              "price": "$13.89",
              "rating": 4.2,
              "image": "https://source.unsplash.com/featured/?garlic%20bread"
            },
            {
              "id": 1035,
              "name": "Spring Rolls",
              "price": "$5.81",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?spring%20rolls"
            }
          ]
        },
        "Vegan": {
          "items": [
            {
              "id": 1036,
              "name": "Tofu Stir Fry",
              "price": "$13.45",
              "rating": 4.8,
              "image": "https://source.unsplash.com/featured/?tofu%20stir%20fry"
            },
            {
              "id": 1037,
              "name": "Vegan Curry",
              "price": "$12.19",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?vegan%20curry"
            },
            {
              "id": 1038,
              "name": "Veggie Wrap",
              "price": "$11.57",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?veggie%20wrap"
            },
            {
              "id": 1039,
              "name": "Lentil Soup",
              "price": "$14.18",
              "rating": 3.8,
              "image": "https://source.unsplash.com/featured/?lentil%20soup"
            }
          ]
        },
        "Juices": {
          "items": [
            {
              "id": 1040,
              "name": "Green Detox",
              "price": "$11.82",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?green%20detox"
            },
            {
              "id": 1041,
              "name": "Carrot & Ginger",
              "price": "$11.56",
              "rating": 5.0,
              "image": "https://source.unsplash.com/featured/?carrot%20&%20ginger"
            },
            {
              "id": 1042,
              "name": "Beetroot Blast",
              "price": "$9.61",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?beetroot%20blast"
            },
            {
              "id": 1043,
              "name": "Tropical Mix",
              "price": "$8.78",
              "rating": 3.7,
              "image": "https://source.unsplash.com/featured/?tropical%20mix"
            }
          ]
        },
        "Smoothies": {
          "items": [
            {
              "id": 1044,
              "name": "Banana Berry",
              "price": "$13.7",
              "rating": 4.4,
              "image": "https://source.unsplash.com/featured/?banana%20berry"
            },
            {
              "id": 1045,
              "name": "Mango Tango",
              "price": "$9.09",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?mango%20tango"
            },
            {
              "id": 1046,
              "name": "Pineapple Punch",
              "price": "$10.54",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?pineapple%20punch"
            },
            {
              "id": 1047,
              "name": "Avocado Dream",
              "price": "$4.41",
              "rating": 4.3,
              "image": "https://source.unsplash.com/featured/?avocado%20dream"
            }
          ]
        }
      }
    },
    {
      "id": 4,
      "name": "Spice Route",
      "image": "https://imgs.search.brave.com/9aMWEk8wv3VFGJfgnMK4h1OT8W6NNOYVEYb1AIIrVWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL255L2Fw/aS9yZXMvMS4yL1V6/ZDdWVjYxSFdudFZ1/VVZPdVg5MVEtLS9Z/WEJ3YVdROWFHbG5h/R3hoYm1SbGNqdDNQ/VEV5TkRJN2FEMDJP/VGMtL2h0dHBzOi8v/bWVkaWEuemVuZnMu/Y29tL2VuL21hc2hl/ZF82MDMvYTA3NDhm/ZWUxYmM1MWZhMjQz/Njk3ZDg2OGIyMmE0/YTY",
      "address": "103 Curry Lane, Cityville, ST 12343",
      "phone": "(555) 000-1203",
      "openHours": "10:00 AM - 10:00 PM",
      "menu": {
        "Curries": {
          "items": [
            {
              "id": 1048,
              "name": "Chicken Tikka Masala",
              "price": "$11.09",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?chicken%20tikka%20masala"
            },
            {
              "id": 1049,
              "name": "Lamb Rogan Josh",
              "price": "$13.89",
              "rating": 5.0,
              "image": "https://source.unsplash.com/featured/?lamb%20rogan%20josh"
            },
            {
              "id": 1050,
              "name": "Paneer Butter Masala",
              "price": "$14.88",
              "rating": 4.5,
              "image": "https://source.unsplash.com/featured/?paneer%20butter%20masala"
            },
            {
              "id": 1051,
              "name": "Vegetable Korma",
              "price": "$13.05",
              "rating": 4.9,
              "image": "https://source.unsplash.com/featured/?vegetable%20korma"
            }
          ]
        },
        "Breads": {
          "items": [
            {
              "id": 1052,
              "name": "Garlic Naan",
              "price": "$10.44",
              "rating": 3.9,
              "image": "https://source.unsplash.com/featured/?garlic%20naan"
            },
            {
              "id": 1053,
              "name": "Butter Roti",
              "price": "$5.44",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?butter%20roti"
            },
            {
              "id": 1054,
              "name": "Onion Kulcha",
              "price": "$9.1",
              "rating": 4.5,
              "image": "https://source.unsplash.com/featured/?onion%20kulcha"
            },
            {
              "id": 1055,
              "name": "Plain Paratha",
              "price": "$6.62",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?plain%20paratha"
            }
          ]
        },
        "Rice": {
          "items": [
            {
              "id": 1056,
              "name": "Basmati Rice",
              "price": "$3.83",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?basmati%20rice"
            },
            {
              "id": 1057,
              "name": "Jeera Rice",
              "price": "$8.42",
              "rating": 4.9,
              "image": "https://source.unsplash.com/featured/?jeera%20rice"
            },
            {
              "id": 1058,
              "name": "Veg Biryani",
              "price": "$8.27",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?veg%20biryani"
            },
            {
              "id": 1059,
              "name": "Chicken Biryani",
              "price": "$4.17",
              "rating": 3.9,
              "image": "https://source.unsplash.com/featured/?chicken%20biryani"
            }
          ]
        },
        "Drinks": {
          "items": [
            {
              "id": 1060,
              "name": "Lemonade",
              "price": "$13.17",
              "rating": 5.0,
              "image": "https://source.unsplash.com/featured/?lemonade"
            },
            {
              "id": 1061,
              "name": "Iced Tea",
              "price": "$9.63",
              "rating": 4.0,
              "image": "https://source.unsplash.com/featured/?iced%20tea"
            },
            {
              "id": 1062,
              "name": "Cappuccino",
              "price": "$6.49",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?cappuccino"
            },
            {
              "id": 1063,
              "name": "Smoothie",
              "price": "$7.35",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?smoothie"
            }
          ]
        }
      }
    },
    {
      "id": 5,
      "name": "Bella Italia",
      "image": "https://imgs.search.brave.com/NjsbM0TdgaHGegzSo9Z4SfJTkU91UG9NfNJ3xKXMxjs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL1RvbSdzX1Jl/c3RhdXJhbnQsX05Z/Qy5qcGc",
      "address": "104 Italy Blvd, Cityville, ST 12344",
      "phone": "(555) 000-1204",
      "openHours": "10:00 AM - 10:00 PM",
      "menu": {
        "Pizza": {
          "items": [
            {
              "id": 1064,
              "name": "Margherita",
              "price": "$3.67",
              "rating": 4.2,
              "image": "https://source.unsplash.com/featured/?margherita"
            },
            {
              "id": 1065,
              "name": "Pepperoni",
              "price": "$9.73",
              "rating": 3.9,
              "image": "https://source.unsplash.com/featured/?pepperoni"
            },
            {
              "id": 1066,
              "name": "Veggie Supreme",
              "price": "$5.75",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?veggie%20supreme"
            },
            {
              "id": 1067,
              "name": "BBQ Chicken",
              "price": "$11.69",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?bbq%20chicken"
            }
          ]
        },
        "Pasta": {
          "items": [
            {
              "id": 1068,
              "name": "Spaghetti Bolognese",
              "price": "$12.37",
              "rating": 4.8,
              "image": "https://source.unsplash.com/featured/?spaghetti%20bolognese"
            },
            {
              "id": 1069,
              "name": "Penne Arrabbiata",
              "price": "$13.59",
              "rating": 4.2,
              "image": "https://source.unsplash.com/featured/?penne%20arrabbiata"
            },
            {
              "id": 1070,
              "name": "Fettuccine Alfredo",
              "price": "$11.55",
              "rating": 5.0,
              "image": "https://source.unsplash.com/featured/?fettuccine%20alfredo"
            },
            {
              "id": 1071,
              "name": "Lasagna",
              "price": "$3.09",
              "rating": 4.2,
              "image": "https://source.unsplash.com/featured/?lasagna"
            }
          ]
        },
        "Sides": {
          "items": [
            {
              "id": 1072,
              "name": "Garlic Knots",
              "price": "$11.47",
              "rating": 4.5,
              "image": "https://source.unsplash.com/featured/?garlic%20knots"
            },
            {
              "id": 1073,
              "name": "Mozzarella Sticks",
              "price": "$7.83",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?mozzarella%20sticks"
            },
            {
              "id": 1074,
              "name": "Focaccia Bread",
              "price": "$9.71",
              "rating": 3.8,
              "image": "https://source.unsplash.com/featured/?focaccia%20bread"
            },
            {
              "id": 1075,
              "name": "Side Salad",
              "price": "$5.9",
              "rating": 3.7,
              "image": "https://source.unsplash.com/featured/?side%20salad"
            }
          ]
        },
        "Desserts": {
          "items": [
            {
              "id": 1076,
              "name": "Cheesecake",
              "price": "$10.74",
              "rating": 3.7,
              "image": "https://source.unsplash.com/featured/?cheesecake"
            },
            {
              "id": 1077,
              "name": "Brownie Sundae",
              "price": "$6.55",
              "rating": 4.3,
              "image": "https://source.unsplash.com/featured/?brownie%20sundae"
            },
            {
              "id": 1078,
              "name": "Fruit Tart",
              "price": "$4.63",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?fruit%20tart"
            },
            {
              "id": 1079,
              "name": "Chocolate Mousse",
              "price": "$5.29",
              "rating": 4.4,
              "image": "https://source.unsplash.com/featured/?chocolate%20mousse"
            }
          ]
        }
      }
    },
    {
      "id": 6,
      "name": "Burger Town",
      "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
      "address": "105 Burger Street, Cityville, ST 12345",
      "phone": "(555) 000-1205",
      "openHours": "10:00 AM - 10:00 PM",
      "menu": {
        "Burgers": {
          "items": [
            {
              "id": 1080,
              "name": "Classic Beef Burger",
              "price": "$8.19",
              "rating": 4.6,
              "image": "https://source.unsplash.com/featured/?classic%20beef%20burger"
            },
            {
              "id": 1081,
              "name": "Cheeseburger",
              "price": "$11.91",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?cheeseburger"
            },
            {
              "id": 1082,
              "name": "Double Patty Burger",
              "price": "$9.61",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?double%20patty%20burger"
            },
            {
              "id": 1083,
              "name": "Vegan Burger",
              "price": "$3.96",
              "rating": 3.9,
              "image": "https://source.unsplash.com/featured/?vegan%20burger"
            }
          ]
        },
        "Sides": {
          "items": [
            {
              "id": 1084,
              "name": "Garlic Knots",
              "price": "$4.02",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?garlic%20knots"
            },
            {
              "id": 1085,
              "name": "Mozzarella Sticks",
              "price": "$9.08",
              "rating": 3.6,
              "image": "https://source.unsplash.com/featured/?mozzarella%20sticks"
            },
            {
              "id": 1086,
              "name": "Focaccia Bread",
              "price": "$10.05",
              "rating": 3.5,
              "image": "https://source.unsplash.com/featured/?focaccia%20bread"
            },
            {
              "id": 1087,
              "name": "Side Salad",
              "price": "$9.94",
              "rating": 4.5,
              "image": "https://source.unsplash.com/featured/?side%20salad"
            }
          ]
        },
        "Drinks": {
          "items": [
            {
              "id": 1088,
              "name": "Lemonade",
              "price": "$13.35",
              "rating": 4.0,
              "image": "https://source.unsplash.com/featured/?lemonade"
            },
            {
              "id": 1089,
              "name": "Iced Tea",
              "price": "$3.57",
              "rating": 3.7,
              "image": "https://source.unsplash.com/featured/?iced%20tea"
            },
            {
              "id": 1090,
              "name": "Cappuccino",
              "price": "$4.47",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?cappuccino"
            },
            {
              "id": 1091,
              "name": "Smoothie",
              "price": "$7.76",
              "rating": 4.7,
              "image": "https://source.unsplash.com/featured/?smoothie"
            }
          ]
        },
        "Combos": {
          "items": [
            {
              "id": 1092,
              "name": "Burger + Fries + Soda",
              "price": "$11.19",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?burger%20+%20fries%20+%20soda"
            },
            {
              "id": 1093,
              "name": "Double Burger Combo",
              "price": "$8.69",
              "rating": 4.5,
              "image": "https://source.unsplash.com/featured/?double%20burger%20combo"
            },
            {
              "id": 1094,
              "name": "Family Pack",
              "price": "$14.36",
              "rating": 4.4,
              "image": "https://source.unsplash.com/featured/?family%20pack"
            },
            {
              "id": 1095,
              "name": "Kids Meal",
              "price": "$9.57",
              "rating": 4.1,
              "image": "https://source.unsplash.com/featured/?kids%20meal"
            }
          ]
        }
      }
    }
  ]