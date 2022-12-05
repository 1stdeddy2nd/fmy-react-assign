import styles from './styles.module.css';
import CustomSelect from "../../utils/CustomSelect";
import CaseChart from "./components/CaseChart";
import DatabaseChart from "./components/DatabaseChart";

function WebAnalysisItems() {

    const margin = ({mt, mb}) => ({marginTop: mt + 'px', marginBottom: mb + 'px'})

    const renderSubTitle = ({text, mt, mb}) => (
        <div className={styles.subTitle} style={margin({mt, mb})}>{text}</div>
    )

    const renderLine = (mb) => <div className={styles.whiteLine} style={margin({mt: 0, mb})}/>

    const renderCaseCount = ({item, mb}) => <div className={styles.caseCount} style={margin({mt: 0, mb})}>{item}</div>

    return (
        <div className={styles.container}>
            <div className="d-flex border-opacity-10 border-bottom border-white">
                <div className={styles.headerLeft}>
                    <div className={styles.title}>Database items</div>
                    <div style={{marginTop: '10px', marginLeft: '371px', width: '216px'}}>
                        <CustomSelect
                            label="Show: "
                            options={[
                                {value: 'This_Week', label: 'This Week'},
                                {value: 'Next_Week', label: 'Next Week'}
                            ]}
                        />
                    </div>
                    <div style={{marginTop: '10px', marginLeft: '30px', width: '142px'}}>
                        <CustomSelect options={[{value: 'Compare', label: 'Compare'}]}/>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.title}>Cases</div>
                </div>
            </div>
            <div className="d-flex h-100">
                <div className={styles.content1}>
                    {renderSubTitle({text: 'Total items this week', mt: 32, mb: 20})}
                    <div className={styles.totalItem}>10,324</div>
                    {renderLine(28)}
                    {renderSubTitle({text: 'Changes from last week', mt:0, mb: 20})}
                    <div className={styles.changesPercentage}>+12%</div>
                    {renderLine(23)}
                    {renderSubTitle({text: 'Total items in DB', mt:0, mb: 20})}
                    <div className={styles.totalInDB}>5,403</div>
                </div>
                <div className={styles.content2}>
                    <DatabaseChart/>
                </div>
                <div className={styles.content3}>
                    {renderSubTitle({text: 'Lorem ipsum', mt: 27, mb: 20})}
                    {renderCaseCount({item: '53', mb: 31})}
                    {renderLine(28)}
                    {renderSubTitle({text: 'Lorem ipsum', mt: 0, mb: 20})}
                    {renderCaseCount({item: '+2', mb: 32})}
                    {renderLine(28)}
                    {renderSubTitle({text: 'Lorem ipsum', mt: 0, mb: 20})}
                    {renderCaseCount({item: 'Lorem ipsum', mb: 39})}
                </div>
                <div className="flex-grow-1 d-flex align-items-center" style={{marginLeft: '39px'}}>
                    <CaseChart/>
                </div>
            </div>
        </div>
    );
}

export default WebAnalysisItems;
