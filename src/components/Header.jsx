import "../css/style.css"
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header=()=>{

    const Cart = useSelector((state)=>state.mycart.cart);  //get data from json
    // console.log(Cart);
    const Mylen = Cart.length;
    const navigate = useNavigate();
    return(
        <>
        
        <div id="header">
            <div><img src="data:image/png;base64,
            iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/
            Pny7AAAAxlBMVEX///8AAAABAQH+mgD8/Pz/mADY2Ni4uLgTExOwsLAXFxc1NTXV1dXz8/
            // Pt7e0FBQWXl5diYmLExMR+fn5RUVF0dHSRkZEsLCzMzMwgICDf398bGxuKior/lADm5uZISEifn5/
            // z17RZWVmnp6c9PT1sbGz1mQ3//PX/8d3/9+z/rDr/xYj/6cz+vGj+pSH/qD//2rP+477/zpX/xoD/
            // tVj/pDP/vX7/tmv5q0f/vnX/1KL6sTT6qhn9tEL6xWz/mBz+4rPvzZclZMonAAALt0lEQVR4nO1ZCXfauhLGYLy
            // E3Qs2YGyeMWEJULbcJvTe1/b//6mnbWTZIaTZ2nPPm++UBmRpNJ9mNDOSKxUEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFA
            // IBAIBAKBQCAQCAQCgUAgEAgE4v8CbaMZUhjxtV56PDSG7WsN6iODSWwOW29RiEp+TrREm/YpiW+FUzfNAoKG509D9aneNCk
            // cQyc/womfeqk7NWCc052lXi9vUKZxur7XoBKzNLKbBTUd27wANgNgaHbJVET0xCzw0Q0+NqSdh7bb87xZZMaqcDfTFGRRmMsN
            // 09GAwo8r7Ql082zWoRk1oGFaXJ62PQsUiVWvr8wXBx3rAvy8SzztjWBs4NsKy9jTaN9OFhK1ex3eZTBzoEvc5SpVq1XyYV8TEx7
            // qplDKM9oR78ZmmJJHYZqrO+qrC2jMBnlfLjPNjWNoF+FJ8zZ9C1aB6eoO87FC/5FZMRULZI7g4lowoSbnDoCNborFT43JjXhIOG
            // tWWBmmMI4uQ6ebr5+R8E6qRM2TbIbF+eBPCmRCTw4Sf3pyrHEjjGEaXj49WX42mK13lUITerKHjWGBDJlq4ikzVLWs0ld0Il+CU
            // LpCIiRKpuyr31bIPLFLTqbp5V4ihmq9YYlMYHfV6TUt0qmyFuivrBT59Ft6wTKBN9AKfaJBaVQXyPjKmioSA1O1TBXoSgsIN4tnW
            // kEj3sVtlci4CROSezLpEPdg5MiLIrZr+e9BXHSzTsFplJXl8khrIjYw3WW8cZRG/dSSbPyWJHPBMNqMrb4+kVyCrDHoABuzSMaCp
            // QWP0siucaBzwrzEEAGCNIQFMlUuYSCGg7+NbhRxwhVc1kS2lc8awgao64Hrup5EZoH4Bg9aRoOP1ixqjKE7ArsNC2S4eRoBGL6qR
            // USuxr2zQRxaJ9KMDIRP6M8CGa9r224AC032fOJOJm5D2srIXV4Te4TKcCCyZXJXSbQiSyhrRXxL9cVSaC772XY7wlC2SoYFKd8Mz
            // VlHOJrWq+iJINmt6KrDE/QLZDRNbNDpCEZ3UqYc33T0w0OOIyLmwBEihzMhoGFWStCFNPJJ+cq3RmLjB0M6XK/w1EDaerFKhuyDL
            // vXaVg88JSMe2ku9pDFqyEWTycQtkRkQNyBN7RS8BnSbiekFmWFERGbBjcyBbVdssUDNfgxhBmMHIlGEoJsr+saeUH4UFi0zi5nh
            // TbBcQJgNjaZjTk2+N8nDLhjCLblZjxlGb/WhQ09oO4FtJ5IBqZdCx57wKoLSz8mUnaynCS8nfsB6V1xgN4VOPoif6CqZwZSzJfu
            // C23YgjK2TMAyLNnmOjMt9WrfF86orRtglMmWRreg5y3TFSLJSkIMCQWYgXbLfEeJnrYoSAGADtlKh301poZrOdJJeJkPyigisjv
            // jdia6QAbRDc9qHfVkko1dCS4OEKod2BBnwe70ytYRfJW2VjCx+eoKMlYtu9ntJFgxGN51nyHT6gkwonluQJJ8h0zJJId4gIq2OJF
            // NkmsmMMgXNhxArEwOaTAjejaZKZgZbskyGRHPJQSbEEhmrX7LMVTJ5RatILLmZr8FAHwpBkfYoGchJlfAGNoWjkOn4F8nohgtzFi
            // qm95BxPJCoiiySsQeQUcAKRHMbyHhlMhrfRjkZ2GUqGd0UZaFQsfN+y9CKRJN1U6eTu5lChpeTLGHIvU42iCQTQ1MTUpFlv0RGd5
            // jn8ro/SWeu927L6F0ZcDtZ2vP97EJobrsWdIrkuY6R0UqWyclMXyJjJLCGA9822u3WM6H5FWTsAaiZRE7cbsUXkqY+hRgMqb/kZs
            // lTMjcvWkYmqYY4+E7fS8ZIYS/0eN5sXUiavIBjRaGTm+t6ABi9tGfEoY8UWlORgt9rGX0yED/hoHyhnIl94GJ1C5cHMjRn4LMVB0
            // IzO/1dI9OFEDYDme8lM5zJ8qPyHBl9CsVprpMALG7gABlbJs34BTIexC6YWRSajEzlLWSaEEGk/xAzlNysOdBE5d0w22RXKWRgK9
            // 1Il5xAMOyp5cwlMoMndR3U6yKTvZqMA4VfAo7ShAoJyJByCjLBICXhLpqaQ13YQZbgcnVdEB+9REZmZyAzhEJKS99EJi9M5W2MeV
            // MaEWkaWEZoZiW+qNsdaIUjgCwkNWbpXyIDmk3EjRU7Hb2FjA2FKXi9DGZVcQkwtEqVAUdis8MWbJqBKAvk4SxTD2cXyYzgzJtyVc
            // MkXy/3rW4mVnIi+wMZej/DE2ORS1Xe1enUbFVleeHYDMf4a2QSeYDvtskZJEyhQiP/saPdq8mEidCPKNfS9baTa17l118yXhboaPR2i2o7gpRLhrfi/khIz7ilrpGJBBlauk7tSFz4cd20tP3G0AyG6NtTFxIH/9DbOJVMVfnGDxn0JMtTkOZOJz1LCLfgYHmFjCFcVL1ygxs6rdN8A5lWd5RfYub6ihZau0AZWjBMFciICiIfzr9CxX+NjD7TlFs9Nqzf0PjEVv8tluF+VlUtnPUCITujm3wiZhtk6cz3Z70kUC1DZsy0KjhMVVRGKVy4XK3NmgkYVdawNpfSYcXa68mw6yN5zUmrPjt2+cVkwt48MDcL/IkZGsM4jg1yso5Y1BDlc8sOYBkg6XjylcVzZLTCEYBbdUQYtFhAsRyRZ8QrjY5KplomU83J8ONM7ikNIohnL6/JRJLH2dRo6/KtCYk8htPLzwI6e1khbUOrPFluGxaQyU+aVSBDDpoy55MKjY0ixRS9UOACHLgDmJTuADSFDAfU8nqo3LHzG+84yN2+5dqt8gWaXmmFE/l+Ro9dTYH6IssYFORW8pLlRsztJo0GfVsHC9Du+/KQoZsuwwTM2poQTye+HkFDu88b5JwkXdg9KjLpdem2o/9iTz2DvYxhlAU3nc4oSPpq6UaVZegP856swc/vfvUna/Ue8GOMeCdy4bFomy8YlroySsHQMZ2wfVnEC3M/MzFbZ4bXSJSSnhulL9e7w+PpYbVaPWzuzusr0p88YsroaodSw+UJl9c7vBn64rxZ1erjcb1Wq9fr49r2fLHbK1fwGhan43r+YdIULM9fbmuEB6Beq3/7lIkULO7Hq8PiE+Ruxswmt9vtlhiG8fn7s8lU9l/GtdP5w+msT5vj4bzb7Sl2xy0l8+mWodPWatsPpzNfLJe57ss74mfjfz52iotYPJJVuyV0PnHhfhBfG//3dfH3bVgetiTcfH84fEIomK9ZtGRkLkazj5/xvK3TyLN63H0snfmPx9UjdeAzdbNPiDMXsTjVefxcHT9mSupQi+M9SS91apDzuDb+9lkZ7QnmxNUYnXH924/5++0zX/74h0Xk+mpNHPmxXhsfP0DNX8X+JLLbeHy72cli6g2YLxe7TY2lmdrthtpjvarXbvcfp+vLWBweGBlSeoxrfz+e94vl/LWM5oTI/rzZEiYkaY5rDwdm5F2tNt78Ni/jWB9XnA7bPtvT8bAj9e6v+hwlsjscT1uyUQgIl/vjmj1ZHsnv3efpfRnL/ZFuHRbaqIm2Xx42x/N+vXgpBy0X6/2ZVMj3eT1Wrz3uhDEWxOSn32wYptV+Q2JAXVRTzEjb+y8nUsHv9uv1ohwayGllvd8RGpuHe0JEQf20gxXQSWDe/tYdI7Fcn8b1glpssW+396uH02bzeLw7HM4/f/48Ho+Pm83p4UuJBXexb7vcEsuvJJR9fl32HJ1NrVYvKyiI0XD3/fvt7a0IFk/7kabTXnWq/f1487sS5gXM1xuS7y7wqQOF+jN0yajtY7Esmt+NH9Z/ignH8vy4rZdXnnGoczaXjbLdPKm/53d/0i6gxHq3WX1XVK5fAbXT99Vmd6lW/bST+etAEsfxRI+/ijmegmbH719OR1I2/GmFX8B8uT4fv57uaZkzvsSjfnv/8PV4/vXk+qcxJzXK4e6vr6eH1f32loOF6q9/3R1I3fNv4aGAlCvr9fo/APL932MOBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBALxm/E/wy70ldnn0FUAAAAASUVORK5CYII=" style={{height:"60px", width:"80px"}}/></div>
            <div>Search...</div>
            <div><IoMdCart onClick={()=>{navigate("/cart")}}/> {Mylen}</div>
        </div>
        </>
    )
}
export default Header;