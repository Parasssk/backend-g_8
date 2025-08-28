import createError from 'http-errors';

export function validate(schema) {
  return (req, res, next) => {
    try {
      const data = { body: req.body, query: req.query, params: req.params };
      const parsed = schema.parse(data);
      req.body = parsed.body ?? req.body;
      req.query = parsed.query ?? req.query;
      req.params = parsed.params ?? req.params;
      next();
    } catch (err) {
      const message = err?.issues?.map((i) => i.message).join(', ') || err.message;
      next(createError(400, message));
    }
  };
}

