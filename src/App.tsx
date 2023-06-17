import { useRef, useState } from 'react';
import './App.css';
import './css/global.css';
import './css/home.scss';
import Footer from './parts/footer';
import Header from './parts/header';
import { Slide, SlideshowRef } from "./common/slideshow";
import 'react-slideshow-image/dist/styles.css'


function App() {
  const slideRef = useRef<SlideshowRef>(null);
  const [isContentAll, setContentAll] = useState<boolean>(true);
  const [isContentFreeship, setContentFreeship] = useState<boolean>(false);
  const [isContentNinebath, setContentNinebath] = useState<boolean>(false);
  const [isContentCashback, setContentCashback] = useState<boolean>(false);

  const poster: any = [
    {
      img: './img/poster/ps1.webp'
    },
    {
      img: './img/poster/ps2.webp'
    },
    {
      img: './img/poster/ps3.webp'
    }
  ]

  return (
    <div className='bg-prim'>
      <Header />
      <main className='home__main overflow-y'>
        <div className='padd-df width-df m-auto'>
          <article data-name='search'>
            <form className='rel home__search'>
              <span className='abs'>🔍️</span>
              <input type='text' placeholder='protein whey' />
              <button type='submit' className='abs'>Search</button>
            </form>
          </article>
          <section data-name='slideshow'>
            <Slide indicators={true} ref={slideRef} cssClass='poster' >
              {poster.map((el: any, i: number) => {
                return <div key={i} style={{ textAlign: 'center', fontSize: '30px' }}>
                  <img src={'http://localhost:3000/' + el.img} alt="" className="img bd-df" />
                </div>;
              })}
            </Slide>
          </section>
          <article data-name='menu'>
            <div className='overflow-x home__menu'>
              <div>
                <p className='text-2xl'>🛍️</p>
                <p className='text-s m-0'>LazMall<br />&nbsp;</p>
                <div></div>
                <p className='text-2xl'>🥐️</p>
                <p className='text-s m-0'>LazAroi<br />&nbsp;</p>
              </div>
              <div>
                <p className='text-2xl'>🎐️</p>
                <p className='text-s m-0'>Topping<br />Discount</p>
                <div></div>
                <p className='text-2xl'>👚️</p>
                <p className='text-s m-0'>LazBEAUTY<br />&nbsp;</p>
              </div>
              <div>
                <p className='text-2xl'>🚚️</p>
                <p className='text-s m-0'>Free<br />Shipping</p>
                <div></div>
                <p className='text-2xl'>🎁️</p>
                <p className='text-s m-0'>LazHome<br />&nbsp;</p>
              </div>
              <div>
                <p className='text-2xl'>💸️</p>
                <p className='text-s m-0'>9Bath<br />&nbsp;</p>
                <div></div>
                <p className='text-2xl'>🖥️</p>
                <p className='text-s m-0'>Electronics<br />&nbsp;</p>
              </div>
              <div>
                <p className='text-2xl'>🎮️</p>
                <p className='text-s m-0'>LazLand<br />Game</p>
                <div></div>
                <p className='text-2xl'>🌍️</p>
                <p className='text-s m-0'>LazGlobal<br />&nbsp;</p>
              </div>
              <div>
                <p className='text-2xl'>👝️</p>
                <p className='text-s m-0'>LazWallet<br />&nbsp;</p>
                <div></div>
                <p className='text-2xl'>🎉️</p>
                <p className='text-s m-0'>LazBonus<br />&nbsp;</p>
              </div>
            </div>

          </article>
          <article data-name='flash sell' className='bg-second bd-df rel'>
            <h3>LazFlas🌩️ Sell</h3> <span className='abs col-grey' style={{top:'0', right:'0'}}>07:28 &gt;</span>
            <div className='dp-grid home__flashsell'>
              <div className='home__flashsell-item'>
                <img src='./img/flashsell/fsell1.webp' className='img' alt=''/>
                <p className='m-0'>B122.00</p>
                <p className='line-through m-0 col-red'>B272.00</p>
                <div className='pt-2'>
                  <div className='rel home__flashsell-progress'>
                    <div className='abs'>🔥️ 31 Sold</div>
                  </div>
                </div>
              </div>
              <div className='home__flashsell-item'>
                <img src='./img/flashsell/fsell2.webp' className='img' alt=''/>
                <p className='m-0'>B119.00</p>
                <p className='line-through m-0 col-red'>B578.00</p>
                <div className='pt-2'>
                  <div className='rel home__flashsell-progress'>
                    <div className='abs'> 17 Sold</div>
                  </div>
                </div>
              </div>
              <div className='home__flashsell-item'>
                <img src='./img/flashsell/fsell3.webp' className='img' alt=''/>
                <p className='m-0'>B268.00</p>
                <p className='col-yellow m-0 col-red'>B578.00</p>
                <div className='pt-2'>
                  <div className='rel home__flashsell-progress'>
                    <div className='abs'>🔥️ 17 Sold</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article data-name='lazada mall' className='bg-second bd-df rel'>
            <h3>🎫️ LazMall</h3>
            <span className='abs col-grey' style={{top:'0', right:'0'}}>100% Authentic &gt;</span>
            <div className='dp-flex home__mall text-center'>
              <div className='home__mall left'>
                <img src='./img/mall/mall1.webp' className='img' alt=''/>
                <p>🎙️</p>
                <p>LazMall Selection</p>
              </div>
              <div className='home__mall center'>
                <img src='./img/mall/mall2.webp' className='img' alt=''/>
                <p>📖️</p>
                <p>Brand Mega Offers</p>
              </div>
              <div className='home__mall right'>
                <img src='./img/mall/mall3.webp' alt=''/>
                <img src='./img/mall/mall4.webp' alt=''/>
                <p>💍️</p>
                <p>Recommended Brands</p>
              </div>
            </div>
          </article>
          <section data-name='quick navi' style={{padding:'1.5rem 0 1rem 0'}}>
            <div className='overflow-x home__quick-navi'>
              <div onClick={()=> {
                setContentAll(true); 
                setContentCashback(false);
                setContentFreeship(false);
                setContentNinebath(false);
                }} className={isContentAll? 'actives cursor': 'cursor'}>
                <p className='text-2xl m-0'>♥️</p>
                <p className='text-sm m-0'>All</p>
              </div>
              <div onClick={()=> {
                setContentAll(false); 
                setContentCashback(false);
                setContentFreeship(true);
                setContentNinebath(false);
                }}  className={isContentFreeship? 'actives cursor': 'cursor'}>
                <p className='text-2xl m-0'>🚚️</p>
                <p className='text-sm m-0'>Free Shipping</p></div>
              <div onClick={()=> {
                setContentAll(false); 
                setContentCashback(false);
                setContentFreeship(false);
                setContentNinebath(true);
                }}  className={isContentNinebath? 'actives cursor': 'cursor'}>
                <p className='text-2xl m-0'>💸️</p>
                <p className='text-sm m-0'>Start 9.-</p></div>
              <div onClick={()=> {
                setContentAll(false); 
                setContentCashback(true);
                setContentFreeship(false);
                setContentNinebath(false);
                }}  className={isContentCashback? 'actives cursor': 'cursor'}>
                <p className='text-2xl m-0'>🤑️</p>
                <p className='text-sm m-0'>Cashback</p></div>
            </div>
          </section>
          {/* content all */}
          {isContentAll &&(<section data-name='suggest all' className='dp-grid home__all'>
            <div>
              <img src='./img/all/all1.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ มาสคาร่ากันน้ำ 3D ไม่หลุดง่าย ปรับ...</p>
              <p className='text-xl col-red m-0'>&#3647;128</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/all/all2.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ เวเฟอร์กรอบรสช็อคโกแลต</p>
              <p className='text-xl col-red m-0'>&#3647;325</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/all/all3.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ รองเท้าแตะ Nike</p>
              <p className='text-xl col-red m-0'>&#3647;199</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/all/all4.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ เสื้อยืดวินเทจ เกาหลี</p>
              <p className='text-xl col-red m-0'>&#3647;148</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/all/all5.webp' className='img' alt=''/>
              <p className='text-sm m-0'>แก้วเก็บความเย็น อลูมิเนียม</p>
              <p className='text-xl col-red m-0'>&#3647;276</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/all/all6.webp' className='img' alt=''/>
              <p className='text-sm m-0'>ส่งเสริมจินตนาการลูกรัก</p>
              <p className='text-xl col-red m-0'>&#3647;49</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>

          </section>)}
          {/* content free shipping */}
          {isContentFreeship &&(<section data-name='suggest free shipping' className='dp-grid home__all'>
            <div>
              <img src='./img/free-ship/freeship1.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ เคส Appo A91 คละสี</p>
              <p className='text-xl col-red m-0'>&#3647;129</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/free-ship/freeship2.webp' className='img' alt=''/>
              <p className='text-sm m-0'>เสื้อกล้ามสตรีเซ็กซี่ คละสี</p>
              <p className='text-xl col-red m-0'>&#3647;99</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/free-ship/freeship3.webp' className='img' alt=''/>
              <p className='text-sm m-0'>เสื้อยืดกีฬาแตะบอล ออกกำลังกาย</p>
              <p className='text-xl col-red m-0'>&#3647;219</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/free-ship/freeship4.webp' className='img' alt=''/>
              <p className='text-sm m-0'>ประเป๋าสตางค์หนังวัวแท้</p>
              <p className='text-xl col-red m-0'>&#3647;399</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/free-ship/freeship5.webp' className='img' alt=''/>
              <p className='text-sm m-0'>หนังสือ คู่มือทำเค้ก</p>
              <p className='text-xl col-red m-0'>&#3647;279</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/free-ship/freeship6.webp' className='img' alt=''/>
              <p className='text-sm m-0'>เสื้อสนใจฤดูร้อนสตรี</p>
              <p className='text-xl col-red m-0'>&#3647;280</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>

          </section>)}
          {/* content  9 bath*/}
          {isContentNinebath &&(<section data-name='suggest 9 bath' className='dp-grid home__all'>
            <div>
              <img src='./img/flashsell/fsell1.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ หมอนรองนั่ง คละสี</p>
              <p className='text-xl col-red m-0'>&#3647;320</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/flashsell/fsell2.webp' className='img' alt=''/>
              <p className='text-sm m-0'>ต้นไม้เทียม เสริมความมงคล</p>
              <p className='text-xl col-red m-0'>&#3647;249</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/flashsell/fsell3.webp' className='img' alt=''/>
              <p className='text-sm m-0'>แป้งรองพื้นคุมมัน Loose Powder</p>
              <p className='text-xl col-red m-0'>&#3647;149</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/flashsell/fsell4.webp' className='img' alt=''/>
              <p className='text-sm m-0'>นิยายวาย ปรมจารย์ลักธิมาร</p>
              <p className='text-xl col-red m-0'>&#3647;479</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/flashsell/fsell5.webp' className='img' alt=''/>
              <p className='text-sm m-0'>เครื่องฉีดน้ำแรงดันสูง</p>
              <p className='text-xl col-red m-0'>&#3647;1,290</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/flashsell/fsell6.webp' className='img' alt=''/>
              <p className='text-sm m-0'>น้ำหอมชาย Eternity</p>
              <p className='text-xl col-red m-0'>&#3647;890</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>

          </section>)}
          {/* content cash back */}
          {isContentCashback &&(<section data-name='suggest cashback' className='dp-grid home__all'>
            <div>
              <img src='./img/cashback/cb1.webp' className='img' alt=''/>
              <p className='text-sm m-0'>🔖️ ทองคำผสม 1 บาท เส้นละ</p>
              <p className='text-xl col-red m-0'>&#3647;17,000</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/cashback/cb2.webp' className='img' alt=''/>
              <p className='text-sm m-0'>โรลออน ลูกกลิ้งชาย</p>
              <p className='text-xl col-red m-0'>&#3647;59</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/cashback/cb3.webp' className='img' alt=''/>
              <p className='text-sm m-0'>ส่งเสริมจินตนาการลูกรัก</p>
              <p className='text-xl col-red m-0'>&#3647;189</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/cashback/cb4.webp' className='img' alt=''/>
              <p className='text-sm m-0'>รองเท้าผ้าใบลาย Converse</p>
              <p className='text-xl col-red m-0'>&#3647;259</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/cashback/cb5.webp' className='img' alt=''/>
              <p className='text-sm m-0'>จอแอนดรอยด์ติดรถยนต์ 12</p>
              <p className='text-xl col-red m-0'>&#3647;2,500</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>
            <div>
              <img src='./img/cashback/cb6.webp' className='img' alt=''/>
              <p className='text-sm m-0'>เครื่องสำอาง ทาตา ทาหน้า</p>
              <p className='text-xl col-red m-0'>&#3647;159</p>
              <p className='text-s'>⭐️ <b>4.8</b> (7/2)</p>
            </div>

          </section>)}
        </div>

      </main >
      <Footer />
    </div >
  );
}

export default App;
