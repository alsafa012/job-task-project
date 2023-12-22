import { Container } from 'postcss';
const imp = () => {
     <Container>
               {/* <div className="h-[500px] border"> */}
                    <div className="h-[300px] border mx-auto relative overflow-hidden">
                         {/* left */}
                         <div className="absolute -top-10 -left-10">
                              <div className="w-[100px] h-[100px] box flex justify-center items-center">
                                   <div className="w-[80px] h-[80px] flex justify-center items-center box">
                                        <div className="w-[60px] h-[60px] flex justify-center items-center box"></div>
                                   </div>
                              </div>
                         </div>
                         {/* right */}
                         <div className="absolute -bottom-10 -right-10">
                              <div className="w-[100px] h-[100px] box flex justify-center items-center">
                                   <div className="w-[80px] h-[80px] flex justify-center items-center box">
                                        <div className="w-[60px] h-[60px] flex justify-center items-center box"></div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {/* <div className="box border"></div> */}
               {/* </div> */}
          </Container>
};

export default imp;