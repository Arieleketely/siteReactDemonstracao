import React from 'react';


function Contato(){
    return(
        <div>   
      <header id="header">
    <a id="logo" href="">Logo</a>
    <nav id="nav">
      <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
        <span id="hamburger"></span>
      </button>
      <ul id="menu" role="menu">
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Produtos</a></li>
        <li><a href="/">Portfólio</a></li>
        <li>
          <a href="/">Contato</a></li>
      </ul>
      
    </nav>
  </header>
    



      
      
    
    
    
    

  
        </div>

    
    );
};

export default Contato;