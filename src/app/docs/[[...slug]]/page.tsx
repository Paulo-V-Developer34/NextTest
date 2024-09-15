export default function Produto(
  {params}:
    {params:{
      slug:string[]
    }
  }) 
    {if(params.slug?.length == 2){
      return (
          <>
            <h1>Podemos utilizar um "spread" em uma rota dinâmica para capturar todos os valores mesmo que tanhamos vários '/' (valores dinâmicos)</h1>
            <h1>Caso quisermos que também seja possível acessar a página mesmo que não haja parâmetros podemos utilizar colchetes 2 vezes</h1>
            <br/>

            <h1>Análise de {params.slug[0]} sobre o filme {params.slug[1]}</h1>
          </>
      )
    } else if (params.slug?.length == 1) {
        return (
          <>
            <h1>Podemos utilizar um "spread" em uma rota dinâmica para capturar todos os valores mesmo que tanhamos vários '/' (valores dinâmicos)</h1>
            <h1>Caso quisermos que também seja possível acessar a página mesmo que não haja parâmetros podemos utilizar colchetes 2 vezes</h1>
            <br/>

            <h1>Análise de {params.slug[0]}</h1>
          </>
        )
      }
     else {
      return (
        <>
          <h1>Podemos utilizar um "spread" em uma rota dinâmica para capturar todos os valores mesmo que tanhamos vários '/' (valores dinâmicos)</h1>
          <h1>Caso quisermos que também seja possível acessar a página mesmo que não haja parâmetros podemos utilizar colchetes 2 vezes</h1>
          <br/>

          <h1>Nada foi escolhido</h1>
        </>
      )
    }
  }  