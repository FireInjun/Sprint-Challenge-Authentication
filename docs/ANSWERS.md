<!-- Answers to the Short Answer Essay Questions go here -->
# FireInjun Answers
## 1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
1. Middleware-
    * The "plumbing" of an application. In the case of express, almost everyhing is middleware. They handle the CRUD opeations and provide a means to make application pieces work cohesively as a unit.
1. Sessions-
    * A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application.
1. bcrypt-
    * bcrypt is a password hashing function 
1. JWT- 
    * JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 
## 2.  What does bcrypt do in order to prevent attacks?
### Bcrypt prevents attacks by using the following algorithm:

```
Function bcrypt
   Input:
      cost:     Number (4..31)                      log2(Iterations). e.g. 12 ==> 212 = 4,096 iterations
      salt:     array of Bytes (16 bytes)           random salt
      password: array of Bytes (1..72 bytes)        UTF-8 encoded password
   Output: 
      hash:     array of Bytes (24 bytes)

   //Initialize Blowfish state with expensive key setup algorithm
   state 
  
    
    {\displaystyle \gets }
  
\gets EksBlowfishSetup(cost, salt, password)   

   //Repeatedly encrypt the text "OrpheanBeholderScryDoubt" 64 times
   ctext 
  
    
    {\displaystyle \gets }
  
\gets "OrpheanBeholderScryDoubt"  //24 bytes ==> three 64-bit blocks
   repeat (64)
      ctext 
  
    
    {\displaystyle \gets }
  
\gets EncryptECB(state, ctext) //encrypt using standard Blowfish in ECB mode

   //24-byte ctext is resulting password hash
   return Concatenate(cost, salt, ctext)
```
It is really quite fascinating. In laymen's terms, they slow decryption of the `hash` by adding a significant amount of randomly generated text to the original file and running so many key changes during encrpytion that it becomes a painfully slow situation.
## 3.  What are the three parts of the JSON Web Token?
1. Header
    * Configuration (jwt and type of hashing)
1. Payload
    * Information (credentials)
1. Signature
    * Hash (A mixture of the above plus a 'secret')
