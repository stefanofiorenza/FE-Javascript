
//1) arguments object (Js standard)

  // 1.1)  arguments object
  /*
  function identity(){
    console.log(arguments); 
  }
  */


  //1.2) arguments is not passed in arrow function
  /*
  const identity=() =>{
    console.log(arguments); 
  }
  */

  //****TEST (1)*****/
  identity();
  identity(1,2);
  identity(1,2,3,4);

//2) default parameter:

  //2.1) all OK
    /*
    const buildUrl = (site, protocol) => protocol + '://' + site;
    console.log(buildUrl('www.google.com','http'));
    console.log(buildUrl('www.google.com','http','unecessary parameter'));
    */


  //2.2) missing parameter => Undefined
    /*
    const buildUrl = (site, protocol) => protocol + '://' + site;
    console.log(buildUrl('www.google.com'));
    */

  //2.3) safer version, but I need to read code in function to understand it
    /*
      const buildUrl = (site, protocol) => {
        if (!site) { 
          throw new Error('site is required');
        }
        if(!protocol){
          protocol='http';
        }
        
        return protocol + '://' + site;
      }
      console.log(buildUrl('www.google.com'));
    */

  //2.4) default parameter 
    // - No need to read function code
    // - Highlight mandatory arguments (to be placed in left spaces)

    /*
    const buildUrl = (site, protocol='http') => protocol + '://' + site;
    console.log(buildUrl('www.google.com'));
    console.log(buildUrl('www.google.com','ftp'));
    */

  //2.5) default parameter could be a function what is called at runtime (every time)
  /*
    const getTime = () => 'invocationTime: ' + new Date();  

    const buildUrl = (site, protocol='http', invocationTime =getTime()) => {      
      return protocol + '://' + site+" "+invocationTime; 
    }
    console.log(buildUrl('www.google.com'));
   */
    


