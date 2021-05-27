const sum = {
    sum: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    check: function(name)
    {
        name= ['Aman', 'Medhavi'];
        return name;

    },
    user:  function(){
      const user= {firstName:'Aman'}
        user['lastName']='Karn'; 
        return user;

    }
   


}
module.exports = sum;