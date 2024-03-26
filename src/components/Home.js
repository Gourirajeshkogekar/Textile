// import React, { useState } from 'react';
// import './Home.css';

// function Home() {
//     const [tableData, setTableData] = useState([
//         {
//             machineNo: '',
//             machineType: '',
//             width: '',
//             rpm: '',
//             sheddingType: '',
//             numOfFrames: '',
//             numOfFeeders: '',
//             monogramJacquard: false,
//             topBeam: false,
//             cramming: false,
//             otherDescription: ''
//         }
//     ]);

//     const handleAddRow = () => {
//         setTableData([...tableData, {
//             machineNo: '',
//             machineType: '',
//             width: '',
//             rpm: '',
//             sheddingType: '',
//             numOfFrames: '',
//             numOfFeeders: '',
//             monogramJacquard: false,
//             topBeam: false,
//             cramming: false,
//             otherDescription: ''
//         }]);
//     };

//     const handleRemoveRow = (index) => {
//         const updatedData = [...tableData];
//         updatedData.splice(index, 1);
//         setTableData(updatedData);
//     };

//     const handleInputChange = (e, index) => {
//         const { name, value, type, checked } = e.target;
//         const updatedData = [...tableData];
//         if (type === 'checkbox') {
//             updatedData[index] = { ...updatedData[index], [name]: checked };
//         } else {
//             updatedData[index] = { ...updatedData[index], [name]: value };
//         }
//         setTableData(updatedData);
//     };

//     return (
//         <>
//             <table className='table-container'>
//                 <thead>
//                     <tr >
//                         <th>Machine No</th>
//                         <th>Machine Type</th>
//                         <th>Width</th>
//                         <th>RPM</th>
//                         <th>Shedding Type</th>
//                         <th>No of Frames</th>
//                         <th>No of Feeders</th>
//                         <th>Monogram Jacquard</th>
//                         <th>Top Beam</th>
//                         <th>Cramming</th>
//                         <th>Other Description</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((row, index) => (
//                         <tr key={index}>
//                             <td><input type='number' id='machineNo' name='machineNo' value={row.machineNo} onChange={(e) => handleInputChange(e, index)} disabled={index !== tableData.length - 1} /></td>
//                             <td><select name="machineType" value={row.machineType} onChange={(e) => handleInputChange(e, index)} disabled={index !== tableData.length - 1}>
//                                 <option value="">Select Country</option>
//                                 <option value="India">India</option>
//                                 {/* Add more options as needed */}
//                             </select></td>
//                             <td><input type='text' id='width' name='width' onChange={(e) => handleInputChange(e, index)} value={row.width} disabled={index !== tableData.length - 1} /></td>
//                             <td><input type='text' id='rpm' name='rpm' onChange={(e) => handleInputChange(e, index)} value={row.rpm} disabled={index !== tableData.length - 1} /></td>
//                             <td>
//                                 <select name="sheddingType" value={row.sheddingType} onChange={(e) => handleInputChange(e, index)} disabled={index !== tableData.length - 1}>
//                                     <option value="">Select Country</option>
//                                     <option value="India">India</option>
//                                     {/* Add more options as needed */}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select name="numOfFrames" value={row.numOfFrames} onChange={(e) => handleInputChange(e, index)} disabled={index !== tableData.length - 1}>
//                                     <option value="">Select Country</option>
//                                     <option value="India">India</option>
//                                     {/* Add more options as needed */}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select name="numOfFeeders" value={row.numOfFeeders} onChange={(e) => handleInputChange(e, index)} disabled={index !== tableData.length - 1}>
//                                     <option value="">Select Country</option>
//                                     <option value="India">India</option>
//                                     {/* Add more options as needed */}
//                                 </select>
//                             </td>
//                             <td><input type='checkbox' id={`monogramJacquard-${index}`} name='monogramJacquard' onChange={(e) => handleInputChange(e, index)} checked={row.monogramJacquard} disabled={index !== tableData.length - 1} /></td>
//                             <td><input type='checkbox' id={`topBeam-${index}`} name='topBeam' onChange={(e) => handleInputChange(e, index)} checked={row.topBeam} disabled={index !== tableData.length - 1} /></td>
//                             <td><input type='checkbox' id={`cramming-${index}`} name='cramming' onChange={(e) => handleInputChange(e, index)} checked={row.cramming} disabled={index !== tableData.length - 1} /></td>

//                             <td><input type='text' id='otherDescription' name='otherDescription' onChange={(e) => handleInputChange(e, index)} value={row.otherDescription} disabled={index !== tableData.length - 1} /></td>
//                             <td>
//                                 <button onClick={() => handleRemoveRow(index)} className='remove-button'>Remove</button><br /><br />
//                                 {index === tableData.length - 1 && <button onClick={handleAddRow} className='add-button'>AddRow</button>}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }

// export default Home;



import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [tableData, setTableData] = useState([
        {
            machineNo: '',
            machineType: '',
            width: '',
            rpm: '',
            sheddingType: '',
            numOfFrames: '',
            numOfFeeders: '',
            monogramJacquard: false,
            topBeam: false,
            cramming: false,
            otherDescription: '',
            isEditable: true // Initially set as editable
        }
    ]);

    const handleAddRow = () => {
        const updatedData = tableData.map(row => ({ ...row, isEditable: false }));
        setTableData([...updatedData, {
            machineNo: '',
            machineType: '',
            width: '',
            rpm: '',
            sheddingType: '',
            numOfFrames: '',
            numOfFeeders: '',
            monogramJacquard: false,
            topBeam: false,
            cramming: false,
            otherDescription: '',
            isEditable: true // Newly added row is editable
        }]);
    };

    const handleRemoveRow = (index) => {
        const updatedData = [...tableData];
        updatedData.splice(index, 1);
        setTableData(updatedData);
    };

    const handleInputChange = (e, index) => {
        const { name, value, type, checked } = e.target;
        const updatedData = [...tableData];
        if (type === 'checkbox') {
            updatedData[index] = { ...updatedData[index], [name]: checked };
        } else {
            updatedData[index] = { ...updatedData[index], [name]: value };
        }
        setTableData(updatedData);
    };

    return (
        <>
            <table className='home-container'>
                <thead>
                    <tr>
                        <th>Machine No</th>
                        <th>Machine Type</th>
                        <th>Width</th>
                        <th>RPM</th>
                        <th>Shedding Type</th>
                        <th>No of Frames</th>
                        <th>No of Feeders</th>
                        <th>Monogram Jacquard</th>
                        <th>Top Beam</th>
                        <th>Cramming</th>
                        <th>Other Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td><input type='number' id='machineNo' name='machineNo' value={row.machineNo} onChange={(e) => handleInputChange(e, index)} disabled={!row.isEditable} /></td>
                            <td><select name="machineType" value={row.machineType} onChange={(e) => handleInputChange(e, index)} disabled={!row.isEditable}>
                                <option value="">Select Country</option>
                                <option value="India">India</option>
                                {/* Add more options as needed */}
                            </select></td>
                            <td><input type='text' id='width' name='width' onChange={(e) => handleInputChange(e, index)} value={row.width} disabled={!row.isEditable} /></td>
                            <td><input type='text' id='rpm' name='rpm' onChange={(e) => handleInputChange(e, index)} value={row.rpm} disabled={!row.isEditable} /></td>
                            <td>
                                <select name="sheddingType" value={row.sheddingType} onChange={(e) => handleInputChange(e, index)} disabled={!row.isEditable}>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    {/* Add more options as needed */}
                                </select>
                            </td>
                            <td>
                                <select name="numOfFrames" value={row.numOfFrames} onChange={(e) => handleInputChange(e, index)} disabled={!row.isEditable}>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    {/* Add more options as needed */}
                                </select>
                            </td>
                            <td>
                                <select name="numOfFeeders" value={row.numOfFeeders} onChange={(e) => handleInputChange(e, index)} disabled={!row.isEditable}>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    {/* Add more options as needed */}
                                </select>
                            </td>
                            <td><input type='checkbox' id={`monogramJacquard-${index}`} name='monogramJacquard' onChange={(e) => handleInputChange(e, index)} checked={row.monogramJacquard} disabled={!row.isEditable} /></td>
                            <td><input type='checkbox' id={`topBeam-${index}`} name='topBeam' onChange={(e) => handleInputChange(e, index)} checked={row.topBeam} disabled={!row.isEditable} /></td>
                            <td><input type='checkbox' id={`cramming-${index}`} name='cramming' onChange={(e) => handleInputChange(e, index)} checked={row.cramming} disabled={!row.isEditable} /></td>
                            <td><input type='text' id='otherDescription' name='otherDescription' onChange={(e) => handleInputChange(e, index)} value={row.otherDescription} disabled={!row.isEditable} /></td>
                            <td>
                                {row.isEditable && <button onClick={() => handleRemoveRow(index)} className='remove-button'>Remove</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddRow} className='add-button'>Add Row</button>
        </>
    );
}

export default Home;
