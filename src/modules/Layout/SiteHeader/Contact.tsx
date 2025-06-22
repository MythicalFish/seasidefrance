import info from '@data/info';

const Contact = () => {
  return (
    <div className="text-white font-open">
      <div>
        <i className="codicon codicon-mail"></i> {info.email}
      </div>
      <i className="codicon codicon-phone"></i>
      {info.phone}
    </div>
  );
};

export default Contact;
