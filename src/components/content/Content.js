import React, { Component } from 'react';
import './Content.css';
import PersonCard from '../personCard/PersonCard';

const komuYaDolzhen = [
  {
    fullName: "Name Surname",
    phone: "+77777777",
    amount: 30000,
    deadline: 20
  },
  {
    fullName: "Serik Surname",
    phone: "+77777777",
    amount: 10000,
    deadline: 2
  },
  {
    fullName: "Berik Surname",
    phone: "+77777777",
    amount: 5000,
    deadline: 10
  }
]

const ktoMneDolzhen = [
  {
    fullName: "Name Surname",
    phone: "+77777777",
    amount: 30000,
    deadline: 20
  },
  {
    fullName: "Serik Surname",
    phone: "+77777777",
    amount: 10000,
    deadline: 2
  },
  {
    fullName: "Berik Surname",
    phone: "+77777777",
    amount: 5000,
    deadline: 10
  }
]

class Content extends Component {

  handleClick = () => {
    console.log("child clicked");
  }
  render() {
    return (
      <div className="container" >
        <div className="sidenav">
          <span >Категории блюд</span>
            <a href="#">Выпечка</a>
            <a href="#">Гарниры</a>
            <a href="#">Горячее</a>
            <a href="#">Десерты</a>
            <a href="#">Детское меню</a>
            <a href="#">Завтрак</a>
            <a href="#">Закуски</a>
            <a href="#">Мясное</a>
            <a href="#">Салаты</a>
        </div>
      <div className = "food_block">
        <div className="row">
          <img src="images/шашлык.jpg" className = "food_img " />
          <div className="text">
            <h3 className="name_food">Шашлык</h3>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
            <p className="ingredients"> 
              <span >Состав:</span> 
              баранина, баклажан, масло растительное, перец чёрный молотый, соль, зелень, овощи
            </p>
            </div>
        </div>
      </div>
      <div className = "food_block">
        <div className="row">
          <img src="images/lagman.jpg" className = "food_img " />
          <div className="text">
            <h3 className="name_food">Лагман</h3>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae.Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae.Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore.Modi velit odio nam nulla unde amet odit pariatur at </p> 
            <p className="ingredients"> 
              <span >Состав:</span> 
              говядина, масло растительное, картофель, лук репчатый, чеснок, перец болгарский, морковь, редька, томат-пюре, помидоры, специи, соль, бульон, мука пшеничная, яйца.	</p>
            </div>
        </div>
      </div>
      <div className = "food_block">
        <div className="row">
          <img src="images/plov.jpg" className = "food_img "/>
          <div className="text">
            <h3 className="name_food">Плов</h3>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
            <p className="ingredients"> 
              <span  >Состав:</span> 
              говядина, баранина, рис, лук репчатый, морковь, чеснок, масло растительное						</p>
            </div>
        </div>
      </div>
      
      <div className = "food_block">
          <div className="row">
            <img src="images/шашлык.jpg" className = "food_img "/>
            <div className="text">
              <h3 className="name_food">Шашлык</h3>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
              <p className="ingredients"> 
                <span >Состав:</span> 
                баранина, баклажан, масло растительное, перец чёрный молотый, соль, зелень, овощи						</p>
              </div>
          </div>
        </div>
      <div className = "food_block">
          <div className="row">
            <img src="images/plov.jpg" className = "food_img "/>
            <div className="text">
              <h3 className="name_food">Плов</h3>
              <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam.Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at </p> 
              <p className="ingredients"> 
                <span  style={{ fontWeight: 'bold'}}>Состав:</span> 
                говядина, баранина, рис, лук репчатый, морковь, чеснок, масло растительное
              </p>
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Content;
