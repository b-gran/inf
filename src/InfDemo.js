import React from 'react';
import Tree from 'react-json-tree';
import './InfDemo.css';

import inf from './inf';

const snippetUsing =
`// Create an inf instance
const a = inf('a');

// Now you can do this indefinitely
console.log(a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.a);
`;

const InfDemo = props => {
    const a = inf('a');

    return (
        <div>
            <div className="head">
                <h1><code>inf</code></h1>
            </div>

            <div className="page">
                <div className="page__viewer">
                    <h2>What</h2>

                    <p>
                        An "infinite" Javascript object that abuses
                        property getters so that you can indefinitely
                        access properties of an object.
                    </p>
                    <p>
                        You can see the shape of&nbsp;
                        <code>inf('a')</code>
                        &nbsp;in real-time below
                    </p>

                    <Tree data={a} />
                </div>

                <div className="page__code">
                    <h2>How</h2>
                    <pre><code className="js">
                        { snippetUsing }
                    </code></pre>

                    <h2>Where</h2>
                    <pre><code>
                        git clone&nbsp;
                        <a href="https://github.com/b-gran/inf">
                            https://github.com/b-gran/inf
                        </a>
                    </code></pre>
                </div>
            </div>
        </div>
    );
};
InfDemo.displayName = 'InfDemo';

export default InfDemo;
