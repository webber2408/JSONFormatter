import React, { useState, useEffect } from 'react';

import ObjectType from '../ObjectType';

import { ReactComponent as ExpandIcon } from '../../../assets/icons/expand.svg';
import { ReactComponent as ContractIcon } from '../../../assets/icons/contract.svg';

const ArrayType = ({ label = '', data = [], triggerExpand = false }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(triggerExpand);
  }, [triggerExpand]);

  const toggleExpanded = () => setExpanded(!expanded);
  return (
    <li>
      <span className='pinkText'>
        {label && <>"{label}" : </>}
        {expanded ? (
          <ContractIcon onClick={toggleExpanded} />
        ) : (
          <ExpandIcon onClick={toggleExpanded} className='expandIcon' />
        )}{' '}
        <span className='helperText'>[Array] ({data.length})</span>
      </span>

      {expanded && (
        <ul>
          <span className='redText'>{`[`}</span>

          <div className='arrayData'>
            {data.map((item) => {
              if (Array.isArray(item)) {
                return (
                  <>
                    <ArrayType data={item} triggerExpand={triggerExpand} />,
                  </>
                );
              }
              if (typeof item === 'object') {
                return (
                  <>
                    <ObjectType data={item} triggerExpand={triggerExpand} />,
                    <br />
                  </>
                );
              }
              return <li>{item},</li>;
            })}
          </div>

          <span className='redText'>{`]`}</span>
        </ul>
      )}
    </li>
  );
};

export default ArrayType;
