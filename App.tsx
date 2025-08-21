import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image, TouchableOpacity } from 'react-native';
import  Modal  from 'react-native-modal';

export default function App() {

 const[visivel1 , setVisivel1] = useState(false)
 const[visivel2 , setVisivel2] = useState(false)
 const[visivel3 , setVisivel3] = useState(false)
 const [nome, setNome] = useState("")
 const [email, setEmail] = useState("")
 const [cpf, setCpf] = useState("")
 const [posicao, setPosicao] = useState("")
 const [caracteristica, setCaracterisca] = useState("")

  const abrirCadastro = () => {
    setVisivel1(true);
    setVisivel2(false);
    setVisivel3(false);
  }

  const abrirInforme = () => {
    setVisivel1(false);
    setVisivel2(true);
    setVisivel3(false);
  }

  const abrirSucesso = () => {
    setVisivel1(false);
    setVisivel2(false);
    setVisivel3(true);
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.text}> Peneira do Borussia </Text>
      <Image style={styles.imagem}
      source={require('./assets/logoB.jpg')}
      />
    <Text style={styles.Subtitulo}>Faça aqui embaixo seu cadastro!</Text>

      <TouchableOpacity onPress={abrirCadastro} >
          <Text style={styles.botaoTexto}>DADOS DO ATLETA</Text>
         </TouchableOpacity>

    <Modal 
      isVisible={visivel1}
      style={styles.modal}
      animationIn={'slideInLeft'}
      //animationInTiming={1000}
      animationOut={'slideOutRight'}
      //animationOutTiming={1000}
      backdropColor='#000000ff'
    >

    <TextInput placeholder="Nome do atleta" 
        style={styles.Input}
       //inputMode="email"
        onChangeText={nome => setNome(nome)}/>

    <TextInput placeholder="Email" 
        style={styles.Input}
       // inputMode="email"
        onChangeText={email => setEmail(email)}/>
     
    <TextInput placeholder="CPF" 
        style={styles.Input}
       // inputMode="cpf"
        onChangeText={cpf => setCpf(cpf)}/>

     <TouchableOpacity  onPress={abrirInforme} >
          <Text style={styles.botaoTexto}>Cadastrar</Text>
         </TouchableOpacity>
      

    <TouchableOpacity  onPress={() => setVisivel1(false)} >
          <Text style={styles.botaoTexto}>Sair</Text>
         </TouchableOpacity>
    </Modal> 

    <Modal 
      isVisible={visivel2}
      style={styles.modal}
      animationIn={'slideInLeft'}
      //animationInTiming={1000}
      animationOut={'slideOutRight'}
      //animationOutTiming={1000}
      backdropColor='#000000ff'
    >

    <TextInput placeholder='Posição do jogador'
        style={styles.Input}
        onChangeText={posicao => setPosicao(posicao)} />
        
    <TextInput placeholder='Caracteriscas do jogador'
        style={styles.Input}
        onChangeText={caracteristica => setCaracterisca(caracteristica)} />

      <TouchableOpacity  onPress={abrirSucesso} >
          <Text style={styles.botaoTexto}>Cadastrar</Text>
         </TouchableOpacity>
    </Modal>


    <Modal 
      isVisible={visivel3}
      style={styles.modal}
      animationIn={'slideInLeft'}
      //animationInTiming={1000}
      animationOut={'slideOutRight'}
      //animationOutTiming={1000}
      backdropColor='#000000ff'
    >


      <Text style={styles.textoSucesso}>Cadastro realizado com sucesso!</Text>
      <TouchableOpacity  onPress={() => setVisivel3(false)} >
          <Text style={styles.botaoTexto}>Finalizar</Text>
         </TouchableOpacity>

    </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor:'white',
    width:'80%',
    marginTop: 200,
    marginBottom: 200,
    marginLeft:'10%',
    marginRight:'10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 20,
  },
  text: {
  fontSize: 32,             
  fontWeight: 'bold',       
  color: '#1A1A1A',        
  marginBottom: 16,                
  lineHeight: 40,           
  textAlign: 'center',      
},
  botaoTexto: {
  fontSize: 20, 
  color: 'yellow', 
  fontWeight: 'bold', 
  backgroundColor: 'black', 
  paddingVertical: 12, 
  paddingHorizontal: 20, 
  borderRadius: 8,
  marginTop: 20, 
  textAlign: 'center', 
  elevation: 5, 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
},
imagem: {
    width: '100%',
    height: '50%',
    borderRadius: 20,
  },
  Input: {
    width: "80%",
    marginBottom: 10,
    paddingLeft: 5,
    borderRadius: 10,
    fontSize: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "black",
  },
  textoSucesso: {
    color: '#000000ff',
    fontWeight: 900,
    marginBottom: 30,
    fontSize: 20,
  },
  Subtitulo: {
    fontSize: 23,
    fontWeight: '600',
    color: '#000000ff', // laranja vibrante
    textAlign: 'center',
    marginBottom: 20,
    marginTop:20
  },
});
