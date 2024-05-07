import React from "react";
import { useState } from "react";

export default function HumSathHain(){
    const [Users, setUsers] = useState("");
    return(
    <div>
<button>Add User </button>
<div className="Users">
<button>User1</button>
<button>User2</button>
<button>User3</button>
<button>User4</button>
</div>
    </div>
    )
}



