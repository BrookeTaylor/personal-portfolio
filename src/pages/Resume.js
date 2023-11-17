/**
 *  Title: Brooke Taylor Portfolio 
 *  Author: Brooke Taylor
 *  Date: 11/12/2023
 *  Description: Resume Component
 */

function Resume() {


  return(
    <div className="resume">
      <h2>Brooke Taylor</h2>

      <h3>Education</h3>


      <div className="row justify-content-around">


        <div className="col-4">
            <h5>Bellevue University</h5>
            
            <p>Bachelor of Science in Web Development
            <br />August 2022 - October 2023</p>

            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Express, Node, Web APIs, NoSQL</li>
                <li>Angular w/ TypeScript</li>
                <li>SoapUI, Swagger</li>
                <li>DevOps Principles</li>
                <li>MEAN Stack Bootcamp</li>
            </ul>
        </div>




        <div className="col-4">
            <h5>Fontbonne University</h5>
            <p>Bachelor of Arts in Advertising / Graphic Design
            <br />August 2009 - May 2012</p>

            <ul>
                <li>Advertising principles</li>
                <li>Persuasion</li>
                <li>Media & Culture</li>
                <li>Copywriting</li>
                <li>Photography</li>
                <li>Adobe: After Effects, Illustrator, InDesign, Photoshop</li>
            </ul>

        </div>


        </div>{/** ***** row ***** */}



        <h3>Experience</h3>






        <div className="row justify-content-around">

          <div className="col-8">
              <h6>Salesperson / Administrative Specialist</h6>

              <p>Nebraska Furniture Mart - Kansas City, KS</p>
          </div>


          <div className="col-2">

              <p>December 2020 -<br />February 2023</p>

          </div>

        </div>

        <div className="row justify-content-around">

        <div className="col-10">

            <ul>

                <li>Member of the Be One Diversity & Culture Committee</li>
                <li>Professional sales – 100% commission</li>
                <li>Business-to-business sales</li>
                <li>Account/order management for outside sales team</li>
                <li>Vendor certified for both major and luxury appliances</li>

            </ul>

        </div>

        </div>





        <div className="row justify-content-around">

        <div className="col-8">
            <h6>Retail Sales / Customer Service Representative</h6>

            <p>Pacific Sales inside Best Buy – Chesterfield, MO</p>
        </div>


        <div className="col-2">

            <p>August 2019 -<br />December 2020</p>

        </div>

        </div>



        <div className="row justify-content-around">

        <div className="col-10">

            <ul>

                <li>Answer phones & help in store customers with appliance delivery issues</li>
                <li>Creating alerts and managing a list of orders to watch which have been flagged with detailed notes for other staff/delivery/install teams.</li>
                <li>Assist customers with complete solutions for kitchen & laundry packagesles</li>
                <li>Backup other departments with complex order issues</li>
                <li>Learning Lounge (Web based learning) Leaderboard #1 for fiscal year</li>

            </ul>

        </div>

        </div>



    </div>
  )

}

export default Resume;