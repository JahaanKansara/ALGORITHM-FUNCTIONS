function isColliding(sprite, target){


    if(sprite.x - target.x < sprite.width/2 + target.width/2
      && target.x - sprite.x < sprite.width/2 + target.width/2
      && sprite.y - target.y < sprite.height/2 + target.height/2
      && target.y - sprite.y < sprite.height/2 + target.height/2){
      return true;
    }
    else{
      return false;
    }
  
  
  }

  function bounceOff(sprite, target){

    if(sprite.x - target.x < sprite.width/2 + target.width/2
      && target.x - sprite.x < sprite.width/2 + target.width/2){
        sprite.velocityX = sprite.velocityX * -1;
        target.velocityX = target.velocityX * -1;
      }
  
  
  
  
      if(sprite.y - target.y < sprite.height/2 + target.height/2
      && target.y - sprite.y < sprite.height/2 + target.height/2){
        sprite.velocityY = sprite.velocityY * -1;
        target.velocityY = target.velocityY * -1;
    }
  }