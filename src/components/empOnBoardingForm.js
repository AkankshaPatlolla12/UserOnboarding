import { useState } from "react";
import '../assets/css/userForm.css'; 
import ProgressBar from "./progressBar";

function EmpOnBoardingForm() {
    let formDefState= {
        step: 1,
        workspaceName: '',
        workspaceUrl: '',
        fullName: '',
        displayName: '',
        purpose: 'self'
    }
    const [formData, setFormData] = useState(formDefState);
    const handleChange = (e)=>{
        //we can forma validation here, but as its not menioned in req i didnt implement it
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const nextStep = ()=>{
        if(formData.step === 4) {
            alert('welcome to dribble '+ formData.fullName);
            return;
        }
        if(formData.step === 1 && (formData.fullName === '' || formData.displayName === '')){
            // we can form validation, but its not mentioned in requiremet of POC
           return;
        }
        if(formData.step === 2 && (formData.workspaceName === '' || formData.workspaceUrl === '')){
            // we can form validation, but its not mentioned in requiremet of POC
           return;
        }
        setFormData({...formData, step: formData.step+1});
    }
  return (
    <div className="emp-on-boarding-form">
        
        <div className="form-container">
        <div>
            <img src="images/logo.PNG" className="card-img-top logo" alt="..."/>
        </div>
            <ProgressBar step={formData.step}/>
            {
                formData.step === 1 && (
                    <div>
                        <div>
                            <h3 className="font-weight-bold text-center">Welcome! First things first..</h3>
                            <p className="text-center">You can always change them later</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="workspaceName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" onChange={handleChange} name="fullName" id="workspaceName" placeholder="Eden"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="workspaceName" className="form-label">Display Name</label>
                                <input type="text" className="form-control" onChange={handleChange} name="displayName" id="workspaceName" placeholder="Eden"/>
                            </div>
                        </form>
                    </div>
                )
            }


            {
                formData.step === 2 && (
                    <div>
                        <div>
                            <h3 className="font-weight-bold text-center">Let's setup a home for all your work</h3>
                            <p className="text-center">You can always create another workspace</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="workspaceName" className="form-label">Workspace Name</label>
                                <input type="text" className="form-control" onChange={handleChange} name="workspaceName" id="workspaceName" placeholder="Eden"/>
                            </div>
                            <label htmlFor="basic-url">Worspace URL<span className="sub-label">(Optional)</span></label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">www.eden.com</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" onChange={handleChange} name="workspaceUrl" aria-describedby="basic-addon3" placeholder="Example"/>
                            </div>
                        </form>
                    </div>
                )
            }

            {
                formData.step === 3 && (
                    <div>
                        <div>
                            <h3 className="font-weight-bold text-center">How are you planning to use {formData.fullName}?</h3>
                            <p className="text-center">We will streamline setup experience accordingly</p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className={`card ${formData.purpose === 'self' ? 'active' : ''} `} onClick={()=>handleChange({target:{name:'purpose', value:'self'}})}>
                                    <div className="card-body">
                                    <img src="images/user.png" className="card-img-top onbaord-icon" alt="..."/>
                                        <h6 className="card-title">For Myself</h6>
                                        <p className="card-text">Write beter.Think more clearly.Stay organized.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className={`card ${formData.purpose === 'team' ? 'active' : ''} `} onClick={()=>handleChange({target:{name:'purpose', value:'team'}})}>
                                    <div className="card-body">
                                        <img src="images/team.png" className="card-img-top onbaord-icon" alt="..."/>
                                        <h6 className="card-title">With My team</h6>
                                        <p className="card-text">Wikis, docs, tasks & projects, all in one place.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }

            {
                formData.step === 4 && (
                    <div>
                        <div>
                        <img src="images/tick.png" className="card-img-top compete-icon" alt="..."/>
                        </div>
                        <div>
                            <h3 className="font-weight-bold text-center">Congratulations, Eren!</h3>
                            <p className="text-center">You have completed onboarding, you can start using Eden!</p>
                        </div>
                    </div>
                )
            }
            <div className="d-grid gap-2 form-next">
                <button className="btn btn-primary" type="button" onClick={nextStep}>{formData.step === 4 ? 'Launch Eden' : 'Create Workspace'}</button>
            </div>
        </div>
    </div>
  );
}

export default EmpOnBoardingForm;
