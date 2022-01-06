import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactCountryFlag from "react-country-flag"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Proj0 • Music • LwaziNF</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Dashboard />
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <div className={styles._dashboard}>
      <div className={styles._dashboardVisual}>
        <div className={styles._dashboardImage} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', filter: 'none' }}>
          <div className={styles._dashboardImageContainer}>

            <div className={styles._dashboardImageProfile} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1097470/pexels-photo-1097470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', filter: 'none', backgroundPositionX: '-60px' }} />
            <div className={styles._dashboardImageDetail}>
              @LwaziNF • 28 <ReactCountryFlag countryCode="ZA" svg style={{ marginLeft: '5px' }} />
            </div>
            <div className={styles._dashboardImageDetail1}>
              Lwazi Ndlovu, seasoned drummer.
            </div>

          </div>
        </div>

        <div className={styles._dashboardTitle}>
          <div style={{ opacity: '0.6', marginTop: '5px', marginRight: '10px' }}>
            <Image height={20} width={20} alt={''} src={'/assets/images/icons/add.png'} />
          </div>
          <div className={styles._dashboardTitleMain}>
            User Drops
          </div>
          <div className={styles._dashboardTitleDropdown}>
            <div className={styles._dashboardTitleSecondary}>
              Date Created
            </div>
            <div className={styles._dashboardTitleArrow}>
              <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
            </div>
          </div>
        </div>

          <div className={styles._dashboardDetailsInput} >
            <div className={styles._dashboardArtist1} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1097470/pexels-photo-1097470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
            <div className={styles._dashboardArtist1Detail}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} >
                @SoundByte • 25 <ReactCountryFlag countryCode="ES" svg style={{ marginLeft: '5px' }} />
              </div>
              <div className={styles._truncate} style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: '500', fontSize: '16px', color: 'grey' }} >
              My brothers love your drums, wanna collabo?
              </div>
            </div>
            <div className={styles._dashboardTitleArrow1}>
              <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
            </div>
          </div>

        <div className={styles._dashboardTitle}>
          <div style={{ opacity: '0.6', marginTop: '5px', marginRight: '10px' }}>
            <Image height={30} width={30} alt={''} src={'/assets/images/icons/people.png'} />
          </div>
          <div className={styles._dashboardTitleMain}>
            Featured Artists
          </div>
          <div className={styles._dashboardTitleDropdown}>
            <div className={styles._dashboardTitleSecondary}>
              Popular
            </div>
            <div className={styles._dashboardTitleArrow}>
              <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
            </div>
          </div>
        </div>

        <div className={styles._dashboardOptions}>
          <div className={styles._dashboardOption}>
            <div className={styles._dashboardOptionImage} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1362371/pexels-photo-1362371.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")' }}>
              <div className={styles._dashboardImageFilter} />
            </div>
            <div className={styles._buttons}>
              <div className={styles._baseButton}>
                <Image height={25} width={25} alt={''} src={'/assets/images/icons/play.png'} />
              </div>
              <div className={styles._player}>
                <div className={styles._playerDot} />
              </div>
              <div className={styles._baseButton}>
                <Image height={25} width={25} alt={''} src={'/assets/images/icons/location.png'} />
              </div>
              <div className={styles._baseButton}>
                <Image height={30} width={30} alt={''} src={'/assets/images/icons/cloud.png'} />
              </div>
            </div>
          </div>
          <div className={styles._dashboardOption}>
            <div className={styles._dashboardOptionImage} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1578541/pexels-photo-1578541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }}>
              <div className={styles._dashboardImageFilter} />
            </div>
            <div className={styles._buttons}>
              <div className={styles._baseButton}>
                <Image height={25} width={25} alt={''} src={'/assets/images/icons/play.png'} />
              </div>
              <div className={styles._player}>
                <div className={styles._playerDot} />
              </div>
              <div className={styles._baseButton}>
                <Image height={25} width={25} alt={''} src={'/assets/images/icons/location.png'} />
              </div>
              <div className={styles._baseButton}>
                <Image height={30} width={30} alt={''} src={'/assets/images/icons/cloud.png'} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles._dashboardDetails}>
        <div className={styles._dashboardDetailsMain}>

          <div className={styles._dashboardDetailsInput} >
            <div className={styles._dashboardArtist1} style={{ backgroundImage: 'url("https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")' }} />
            <div className={styles._dashboardArtist1Detail}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} >
                @SoundByte • 25 <ReactCountryFlag countryCode="ES" svg style={{ marginLeft: '5px' }} />
              </div>
              <div className={styles._truncate} style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: '500', fontSize: '16px', color: 'grey' }} >
              My brothers love your drums, wanna collabo?
              </div>
            </div>
            <div className={styles._dashboardTitleArrow1}>
              <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
            </div>
          </div>

          <div className={styles._dashboardDetailsInput} >
            <div className={styles._dashboardArtist1} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1238949/pexels-photo-1238949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")' }} />
            <div className={styles._dashboardArtist1Detail}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} >
                @Digit_All • 32 <ReactCountryFlag countryCode="ZW" svg style={{ marginLeft: '5px' }} />
              </div>
              <div className={styles._truncate} style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: '500', fontSize: '16px', color: 'grey' }} >
              Let&#39;s collaborate, I need your sound!
              </div>
            </div>
            <div className={styles._dashboardTitleArrow1}>
              <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
            </div>
          </div>
        </div>
        <div className={styles._dashboardDetailsSecondary}>
          <div className={styles._dashboardDetailsSecondaryTitle}>
            <div style={{ opacity: '0.6', marginTop: '5px', marginRight: '10px' }}>
              <Image height={20} width={20} alt={''} src={'/assets/images/icons/location.png'} />
            </div>
            Artists Near You
          </div>
          <div className={styles._dashboardArtistsTertiary}>
            <div className={styles._dashboardArtists}>
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")', backgroundPositionY: 'center' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/2802811/pexels-photo-2802811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/758907/pexels-photo-758907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1238949/pexels-photo-1238949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/3756235/pexels-photo-3756235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/8448573/pexels-photo-8448573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/5175616/pexels-photo-5175616.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/8634265/pexels-photo-8634265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
              <div className={styles._dashboardArtist} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1716400/pexels-photo-1716400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
