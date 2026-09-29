import {useState} from 'react';
import {ShieldCheck,Eye,EyeOff} from 'lucide-react';
import {Button} from '../components/ui';

export default function Auth(){
  const [show,setShow]=useState(false);
  return (
    <div className="auth-page">
      <div className="auth-brand"><div className="brand-mark">P</div><strong>Partner<span>Hub</span></strong></div>
      <div className="auth-card">
        <div className="auth-icon"><ShieldCheck/></div>
        <span className="eyebrow">PARTNER PORTAL</span>
        <h1>Welcome back</h1>
        <p>Sign in to manage your products, orders and partner account.</p>
        <label>Email
          <input type="email" placeholder="you@company.com"/>
        </label>
        <label>Password
          <div className="password">
            <input type={show ? 'text' : 'password'} placeholder="Enter your password"/>
            <button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button>
          </div>
        </label>
        <div className="auth-row">
          <label className="check"><input type="checkbox"/> Remember me</label>
          <a>Forgot password?</a>
        </div>
        <Button size="lg">Sign in</Button>
        <small>Frontend demo only · Authentication is not connected.</small>
      </div>
    </div>
  );
}
