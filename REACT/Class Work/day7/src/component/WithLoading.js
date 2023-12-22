const WithLoading=(WrappedComponent)=>{
    return class WithLoadinComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                isLoading:true,
            };
        }
        componentDisMount(){
            const setTimeOutId=setTimeout(()=>{
                this.setState((prevState)=>({
                    isLoading:false,
                }));
            },2000);
            return()=>clearTimeout(setTimeOutId);
        }
    };
};