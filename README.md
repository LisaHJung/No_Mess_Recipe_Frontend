# No Mess Recipe App

Get your cooking on without creating a mess on your computer!

## Table of contents

- [General info](#general-info)
- [Intro Video](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

Trying new recipes is a great way to decompress for us cooking aficionados.
With recipe pulled up on our computer or a phone, we can experiment with any recipe to our hearts' content. 

While we may not mind making a mess in the kitchen to create the perfect dish, ending up with a sticky keyboard or screen because we had to scroll up and down the recipe is something we could live without!

With no mess recipe app, not only can you find your next dish, you can control the scrolling of the recipe page using your voice.
Now you can experiment with a new recipe without getting any ingredients on your device!

## Intro Video

[No Mess Recipe App](https://youtu.be/MqkuIBRldRU)

## Technologies

* React
* Ruby on Rails
* Web Speech API

## Setup

Two separate GitHub repositories(frontend and backend) have been created for this project.

To run this project, install [No_Mess_Recipe_Backend](https://github.com/LisaHJung/No_Mess_Recipe_Backend) locally by cloning the GitHub repository and typing:

```ruby
rails db:migrate
rails s
```

Then, install [No_Mess_Recipe_Frontend](https://github.com/LisaHJung/No_Mess_Recipe_Frontend) locally by cloning the GitHub repository and typing:

```ruby
npm install
npm start
```

## App in Action

* Login/Sign up component. Using the button, you can toggle between log in or sign up form. Upon sign up, login, the app will take you to the main page. 
   ![Login](https://user-images.githubusercontent.com/60980933/85210208-32616300-b2fb-11ea-994b-1010ad198d25.gif)
   
* Enter the main ingredient you want to cook with and the app will pull up all the recipes that matches your search input. Upon clicking view recipe button, recipe page with embedded how-to video, ingredients, instructions, and speech recognition button are rendered to the page. 
   ![search_recipe_page](https://user-images.githubusercontent.com/60980933/85211146-60e33c00-b303-11ea-837e-eb6ee7b3517f.gif)

* Click on the red button to initiate speech command and speech synthesis functionalities. Say scroll down to move the page down and scroll up to move the page up. 
   ![speech_command](https://user-images.githubusercontent.com/60980933/85210895-25477280-b301-11ea-8e76-2dcdc8378bd3.gif)

* You can add the recipe to favorites. When you click on view favorites button, it will take you to your favorites page with all of your pinned items. 
  ![add_delete](https://user-images.githubusercontent.com/60980933/85211594-dd781980-b307-11ea-95d7-cd1472246077.gif)


## Code Examples

Login/sign up form toggle button
```ruby
class Authenticate extends React.Component {
  state = {
    isLoggedIn: true,
  };

  toggleLoginOrSignUp = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    const { isLoggedIn } = this.state;
    const { history } = this.props;

    return (
      <div className="authenticate">
        <nav className="navbar navbar-dark fixed-top">
          {isLoggedIn ? <Login history={history} /> : <Signup />}
          <button onClick={this.toggleLoginOrSignUp}>
            {isLoggedIn ? "Need to Sign Up?" : "Need to Login?"}
          </button>
        </nav>
        <BackgroundVideo />
      </div>
    );
  }
}
```
Speech command to control scrolling of the Recipe Page
```ruby
 if (currentTranscript.includes("up")) {
        window.scrollBy({
          top: -100,
          behavior: "smooth",
        });
      }

      if (currentTranscript.includes("down")) {
        window.scrollBy({
          top: 100,
          behavior: "smooth",
        });
      }
```

## Features

- User log in (hashed password, encoded and decoded token) with functionality to toggle between user log in and sign up
- Upon log in or sign up, it takes user directly to the main page 
- Upon entering the searh term, it pulls up all the recipes that matches the search term
- Upon clicking on view recipe, the Recipe Page component displays how to video, ingredients, instructions, and a button that initiates speech synthesis and speech command functionality
- Using speech command scroll up and scroll down, a user can control the scroll bar on the recipe page
- User can save and delete favorite items 

## To-do-list:

- Add speech command functionality to functions controlled by onClick and submit
- Add a nav bar that allows users to access different components of the app
- Display messages upon successful creation/deletion of favorite item
- Add functionality to take user to the recipe page when they click on their pinned items
- Add error messages for log in error
- Add log out option

## Status

Project is finished with option to expand functionality and DRY out code.

## Inspiration

Trying new recipes is one of my favorite pasttimes. I usually have a recipe pulled up on my computer or my cell phone.
Whether I am baking sticky buns or lasagna, I often forget the next step and turn to my device to look at the recipe again. 
While I don't mind creating a mess in the kitchen while I am cooking, having a sticky screen or keyboard has always been a big pet-peeve of mine. 
I thought why not create a recipe app that I can control with my voice so that I would never have to touch my device while I am cooking?

I hope this app helps other cooking aficionados to keep their devices clean while indulging in cooking therapy!

## Contact

Created by [Lisa Jung](https://www.linkedin.com/in/lisa-jung-23304b53/)

Feel free to contact me!
