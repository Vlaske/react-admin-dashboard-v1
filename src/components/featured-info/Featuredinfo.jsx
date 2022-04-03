import "./featuredinfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoenyContainer">
                <span className="featuredMoeny">$2,415</span>
                <span className="featyredMoenyRate">
                    -$15.4 <ArrowDownward className="featuredIcon negative"/> 
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoenyContainer">
                <span className="featuredMoeny">$4,415</span>
                <span className="featyredMoenyRate">
                    -$1.4 <ArrowDownward className="featuredIcon negative" /> 
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoenyContainer">
                <span className="featuredMoeny">$1,415</span>
                <span className="featyredMoenyRate">
                    $2.4 <ArrowUpward className="featuredIcon positive" /> 
                </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
        </div>
    </div>
  )
}
